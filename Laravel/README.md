# Laravel

## Table of Contents

  1. [Artisan commands](#artisan-commands)
    * [Migrations]()

---
## Artisan commands


| Command | Description |
| --------- | ------- |
|  `make:model User` | Create a model instance |
|  `make:model User -m` | Create a model instance and database migration|


### Migrations
| Command | Description |
| --------- | ------- |
|  `php artisan migrate:rollback` | Rollback the latest migration operation |
|  `php artisan migrate:rollback --step=5` | Rollback the last five migrations |
|  `php artisan migrate:reset` | Rollback  all of your application's migrations |
|  `php artisan migrate:refresh` | Rollback & Migrate In Single Command |
|  `php artisan migrate:refresh --seed` | Refresh the database and run all database seeds |
|  `php artisan migrate:refresh --step=5` | rollback & re-migrate the last five migrations|
