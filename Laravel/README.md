# Laravel

## Table of Contents

  1. [Artisan commands](#artisan-commands)
    * [Make](#make)
    * [Migrations](#migrations)
    * [Routes](#routes)
    

---
## Artisan commands

### Make
| Command | Description |
| --------- | ------- |
|  `make:middleware MiddlewareName` | Replace MiddlewareName with the actual name of the middleware |
|  `make:model User` | Create a model instance |
|  `make:model User -m` | Create a model instance and database migration|


### Migrations
| Command | Description |
| --------- | ------- |
|  `php artisan make:migration create_users_table` | To create a migration |
|  `php artisan make:migration create_users_table --create=users` |  |
|  `php artisan make:migration add_votes_to_users_table --table=users` |  |
|  `php artisan migrate` | To run all of your outstanding migrations |
|  `php artisan migrate --force` |  |
|  `php artisan migrate:rollback` | Rollback the latest migration operation |
|  `php artisan migrate:rollback --step=5` | Rollback the last five migrations |
|  `php artisan migrate:reset` | Rollback  all of your application's migrations |
|  `php artisan migrate:refresh` | Rollback & Migrate In Single Command |
|  `php artisan migrate:refresh --seed` | Refresh the database and run all database seeds |
|  `php artisan migrate:refresh --step=5` | rollback & re-migrate the last five migrations|


### Routes
| Command | Description |
| --------- | ------- |
|  `routes:list` | Listing Your Routes |
|  `route:clear` |  |
|  `route:cache` | |
