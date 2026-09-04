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
