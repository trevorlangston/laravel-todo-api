# Laravel-todo-api

A basic example of a RESTful api in Laravel.

1. `cd laradock && docker-compose up -d mysql nginx`
2. Run `docker ps` to find the 'workspace' container name
3. shell in: `docker exec -it <CONTAINER NAME> bash`
4. migrate the db: `php artisan migrate`
