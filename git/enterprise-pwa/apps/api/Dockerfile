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
