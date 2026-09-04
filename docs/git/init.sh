#!/usr/bin/env bash
set -Eeuo pipefail

ROOT="${1:-enterprise-pwa}"

mkdir -p "$ROOT"/{apps/{api,web},infra/{docker,k8s,helm,jenkins},packages/shared-contracts}

cd "$ROOT"

cat > docker-compose.yml <<'EOF'
services:
  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:8-alpine
    ports:
      - "6379:6379"

  rabbitmq:
    image: rabbitmq:4-management
    environment:
      RABBITMQ_DEFAULT_USER: app
      RABBITMQ_DEFAULT_PASS: app
    ports:
      - "5672:5672"
      - "15672:15672"

  api:
    build:
      context: ./apps/api
    environment:
      APP_ENV: dev
      DATABASE_URL: postgresql://app:app@postgres:5432/app?serverVersion=17
      REDIS_DSN: redis://redis:6379
      MESSENGER_TRANSPORT_DSN: amqp://app:app@rabbitmq:5672/%2f/messages
    depends_on:
      - postgres
      - redis
      - rabbitmq
    ports:
      - "8000:8000"

  web:
    build:
      context: ./apps/web
    environment:
      API_URL: http://api:8000
    depends_on:
      - api
    ports:
      - "4000:4000"

volumes:
  postgres_data:
EOF

cat > apps/api/Dockerfile <<'EOF'
FROM php:8.4-cli

RUN apt-get update \
    && apt-get install -y git unzip libpq-dev libicu-dev libzip-dev librabbitmq-dev \
    && docker-php-ext-install intl pdo_pgsql opcache \
    && pecl install redis amqp \
    && docker-php-ext-enable redis amqp \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.json composer.lock* ./
RUN composer install --no-interaction --prefer-dist --no-progress

COPY . .

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
EOF

cat > apps/api/composer.json <<'EOF'
{
  "type": "project",
  "require": {
    "php": "^8.4",
    "symfony/framework-bundle": "^7.3",
    "symfony/console": "^7.3",
    "symfony/runtime": "^7.3",
    "symfony/orm-pack": "^2.4",
    "symfony/serializer-pack": "^1.3",
    "symfony/validator": "^7.3",
    "symfony/messenger": "^7.3",
    "symfony/cache": "^7.3",
    "symfony/security-bundle": "^7.3",
    "symfony/ldap": "^7.3",
    "symfony/monolog-bundle": "^3.10",
    "doctrine/doctrine-migrations-bundle": "^3.4",
    "doctrine/doctrine-bundle": "^2.13",
    "enqueue/amqp-lib": "^0.10"
  },
  "autoload": {
    "psr-4": {
      "App\\": "src/"
    }
  },
  "scripts": {
    "post-install-cmd": [
      "@auto-scripts"
    ],
    "auto-scripts": {
      "cache:clear": "symfony-cmd"
    }
  },
  "extra": {
    "symfony": {
      "allow-contrib": true,
      "require": "7.3.*"
    }
  }
}
EOF

mkdir -p apps/api/src/{Controller,Entity,Message,MessageHandler,Repository,Service}

cat > apps/api/.env <<'EOF'
APP_ENV=dev
DATABASE_URL=postgresql://app:app@postgres:5432/app?serverVersion=17
REDIS_DSN=redis://redis:6379
MESSENGER_TRANSPORT_DSN=amqp://app:app@rabbitmq:5672/%2f/messages
LDAP_HOST=ldap
LDAP_PORT=389
LDAP_BASE_DN=dc=example,dc=org
LDAP_SEARCH_DN=cn=admin,dc=example,dc=org
LDAP_SEARCH_PASSWORD=admin
EOF

cat > apps/api/config/packages/doctrine.yaml <<'EOF'
doctrine:
  dbal:
    url: '%env(resolve:DATABASE_URL)%'
  orm:
    auto_generate_proxy_classes: true
    enable_lazy_ghost_objects: true
    auto_mapping: true
EOF

mkdir -p apps/api/config/packages

cat > apps/api/config/packages/messenger.yaml <<'EOF'
framework:
  messenger:
    transports:
      async:
        dsn: '%env(MESSENGER_TRANSPORT_DSN)%'
        options:
          exchange:
            name: async
          queues:
            async: ~
    routing:
      App\Message\AppointmentCreated: async
EOF

cat > apps/api/config/packages/cache.yaml <<'EOF'
framework:
  cache:
    app: cache.adapter.redis
    default_redis_provider: '%env(REDIS_DSN)%'
EOF

cat > apps/api/src/Entity/Appointment.php <<'EOF'
<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Appointment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private string $customerName;

    #[ORM\Column(length: 255)]
    private string $customerEmail;

    #[ORM\Column(length: 40)]
    private string $customerPhone;

    #[ORM\Column(length: 100)]
    private string $service;

    #[ORM\Column]
    private \DateTimeImmutable $scheduledAt;

    #[ORM\Column(length: 30)]
    private string $status = 'pending';

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerName(): string
    {
        return $this->customerName;
    }

    public function setCustomerName(string $value): self
    {
        $this->customerName = $value;
        return $this;
    }

    public function getCustomerEmail(): string
    {
        return $this->customerEmail;
    }

    public function setCustomerEmail(string $value): self
    {
        $this->customerEmail = $value;
        return $this;
    }

    public function getCustomerPhone(): string
    {
        return $this->customerPhone;
    }

    public function setCustomerPhone(string $value): self
    {
        $this->customerPhone = $value;
        return $this;
    }

    public function getService(): string
    {
        return $this->service;
    }

    public function setService(string $value): self
    {
        $this->service = $value;
        return $this;
    }

    public function getScheduledAt(): \DateTimeImmutable
    {
        return $this->scheduledAt;
    }

    public function setScheduledAt(\DateTimeImmutable $value): self
    {
        $this->scheduledAt = $value;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $value): self
    {
        $this->status = $value;
        return $this;
    }
}
EOF

cat > apps/api/src/Message/AppointmentCreated.php <<'EOF'
<?php

namespace App\Message;

final readonly class AppointmentCreated
{
    public function __construct(
        public int $appointmentId
    ) {}
}
EOF

cat > apps/api/src/MessageHandler/AppointmentCreatedHandler.php <<'EOF'
<?php

namespace App\MessageHandler;

use App\Message\AppointmentCreated;
use App\Repository\AppointmentRepository;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
final readonly class AppointmentCreatedHandler
{
    public function __construct(
        private AppointmentRepository $appointments
    ) {}

    public function __invoke(AppointmentCreated $message): void
    {
        $appointment = $this->appointments->find($message->appointmentId);

        if (!$appointment) {
            return;
        }

        $appointment->setStatus('processing');

        $this->appointments->save($appointment, true);
    }
}
EOF

cat > apps/api/src/Repository/AppointmentRepository.php <<'EOF'
<?php

namespace App\Repository;

use App\Entity\Appointment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class AppointmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Appointment::class);
    }

    public function save(Appointment $appointment, bool $flush = false): void
    {
        $this->getEntityManager()->persist($appointment);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}
EOF

cat > apps/api/src/Controller/AppointmentController.php <<'EOF'
<?php

namespace App\Controller;

use App\Entity\Appointment;
use App\Message\AppointmentCreated;
use App\Repository\AppointmentRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Attribute\Route;

final readonly class AppointmentController
{
    public function __construct(
        private AppointmentRepository $appointments,
        private MessageBusInterface $bus
    ) {}

    #[Route('/api/appointments', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = $request->toArray();

        $appointment = new Appointment();
        $appointment
            ->setCustomerName($data['customerName'])
            ->setCustomerEmail($data['customerEmail'])
            ->setCustomerPhone($data['customerPhone'])
            ->setService($data['service'])
            ->setScheduledAt(new \DateTimeImmutable($data['scheduledAt']));

        $this->appointments->save($appointment, true);

        $this->bus->dispatch(
            new AppointmentCreated($appointment->getId())
        );

        return new JsonResponse([
            'id' => $appointment->getId(),
            'status' => $appointment->getStatus()
        ], 201);
    }
}
EOF

cat > apps/web/package.json <<'EOF'
{
  "scripts": {
    "start": "ng serve --host 0.0.0.0",
    "build": "ng build",
    "serve:ssr": "node dist/web/server/server.mjs"
  },
  "dependencies": {
    "@angular/animations": "^20.0.0",
    "@angular/common": "^20.0.0",
    "@angular/compiler": "^20.0.0",
    "@angular/core": "^20.0.0",
    "@angular/forms": "^20.0.0",
    "@angular/platform-browser": "^20.0.0",
    "@angular/platform-browser-dynamic": "^20.0.0",
    "@angular/platform-server": "^20.0.0",
    "@angular/service-worker": "^20.0.0",
    "rxjs": "^7.8.2",
    "zone.js": "^0.15.1"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^20.0.0",
    "@angular/cli": "^20.0.0",
    "@angular/compiler-cli": "^20.0.0",
    "typescript": "~5.8.0"
  }
}
EOF

cat > apps/web/Dockerfile <<'EOF'
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "serve:ssr"]
EOF

mkdir -p apps/web/src/app

cat > apps/web/src/app/app.component.ts <<'EOF'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <header>
        <h1>Service Portal</h1>
        <p>Enterprise appointment scheduling</p>
      </header>

      <form (ngSubmit)="submit()">
        <input name="customerName" [(ngModel)]="form.customerName" placeholder="Name">
        <input name="customerEmail" [(ngModel)]="form.customerEmail" placeholder="Email">
        <input name="customerPhone" [(ngModel)]="form.customerPhone" placeholder="Phone">
        <select name="service" [(ngModel)]="form.service">
          <option value="maintenance">Maintenance</option>
          <option value="inspection">Inspection</option>
          <option value="repair">Repair</option>
        </select>
        <input name="scheduledAt" type="datetime-local" [(ngModel)]="form.scheduledAt">
        <button type="submit">Book appointment</button>
      </form>

      @if (status()) {
        <output>{{ status() }}</output>
      }
    </main>
  `
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  readonly status = signal('');

  form = {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    service: 'maintenance',
    scheduledAt: ''
  };

  submit(): void {
    this.http.post<{ id: number; status: string }>(
      '/api/appointments',
      this.form
    ).subscribe({
      next: response => this.status.set(`Appointment ${response.id}: ${response.status}`),
      error: () => this.status.set('Unable to create appointment')
    });
  }
}
EOF

cat > apps/web/src/app/app.config.ts <<'EOF'
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: true,
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
EOF

cat > apps/web/ngsw-config.json <<'EOF'
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }
  ],
  "dataGroups": [
    {
      "name": "api",
      "urls": ["/api/**"],
      "cacheConfig": {
        "strategy": "freshness",
        "timeout": "5s",
        "maxSize": 100,
        "maxAge": "1h"
      }
    }
  ]
}
EOF

cat > Jenkinsfile <<'EOF'
pipeline {
    agent any

    stages {
        stage('Install') {
            parallel {
                stage('PHP') {
                    steps {
                        dir('apps/api') {
                            sh 'composer install --no-interaction --prefer-dist'
                        }
                    }
                }

                stage('Angular') {
                    steps {
                        dir('apps/web') {
                            sh 'npm ci'
                        }
                    }
                }
            }
        }

        stage('Test') {
            parallel {
                stage('PHP Tests') {
                    steps {
                        dir('apps/api') {
                            sh 'php bin/console lint:container'
                        }
                    }
                }

                stage('Angular Build') {
                    steps {
                        dir('apps/web') {
                            sh 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Docker') {
            steps {
                sh 'docker compose build'
            }
        }
    }
}
EOF

cat > infra/helm/Chart.yaml <<'EOF'
apiVersion: v2
name: enterprise-pwa
description: Symfony Angular SSR PWA
type: application
version: 0.1.0
appVersion: "1.0.0"
EOF

mkdir -p infra/helm/templates

cat > infra/helm/values.yaml <<'EOF'
api:
  image: enterprise-pwa-api
  replicas: 2

web:
  image: enterprise-pwa-web
  replicas: 2

postgres:
  image: postgres:17

redis:
  image: redis:8-alpine

rabbitmq:
  image: rabbitmq:4-management
EOF

cat > infra/helm/templates/api.yaml <<'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: enterprise-pwa-api
spec:
  replicas: {{ .Values.api.replicas }}
  selector:
    matchLabels:
      app: enterprise-pwa-api
  template:
    metadata:
      labels:
        app: enterprise-pwa-api
    spec:
      containers:
        - name: api
          image: {{ .Values.api.image }}
          ports:
            - containerPort: 8000
---
apiVersion: v1
kind: Service
metadata:
  name: enterprise-pwa-api
spec:
  selector:
    app: enterprise-pwa-api
  ports:
    - port: 8000
      targetPort: 8000
EOF

cat > infra/helm/templates/web.yaml <<'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: enterprise-pwa-web
spec:
  replicas: {{ .Values.web.replicas }}
  selector:
    matchLabels:
      app: enterprise-pwa-web
  template:
    metadata:
      labels:
        app: enterprise-pwa-web
    spec:
      containers:
        - name: web
          image: {{ .Values.web.image }}
          ports:
            - containerPort: 4000
---
apiVersion: v1
kind: Service
metadata:
  name: enterprise-pwa-web
spec:
  selector:
    app: enterprise-pwa-web
  ports:
    - port: 4000
      targetPort: 4000
EOF

cat > infra/helm/templates/postgres.yaml <<'EOF'
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: {{ .Values.postgres.image }}
          env:
            - name: POSTGRES_DB
              value: app
            - name: POSTGRES_USER
              value: app
            - name: POSTGRES_PASSWORD
              value: app
          ports:
            - containerPort: 5432
EOF

cat > infra/helm/templates/redis.yaml <<'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
        - name: redis
          image: {{ .Values.redis.image }}
          ports:
            - containerPort: 6379
EOF

cat > infra/helm/templates/rabbitmq.yaml <<'EOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rabbitmq
spec:
  replicas: 1
  selector:
    matchLabels:
      app: rabbitmq
  template:
    metadata:
      labels:
        app: rabbitmq
    spec:
      containers:
        - name: rabbitmq
          image: {{ .Values.rabbitmq.image }}
          ports:
            - containerPort: 5672
            - containerPort: 15672
EOF

cat > README.md <<'EOF'
# Enterprise SSR PWA

## Stack

Symfony 7
PHP 8.4
Angular 20
Angular SSR
Angular PWA
PostgreSQL 17
Redis 8
RabbitMQ 4
Docker
Kubernetes
Helm
Jenkins
LDAP

## Development

docker compose up --build

## API

POST /api/appointments

## Queue

php bin/console messenger:consume async

## Kubernetes

helm upgrade --install enterprise-pwa ./infra/helm
EOF

printf '%s\n' "Project generated in $ROOT"
