# Laravel

## Table of Contents
1. [Artisan commands](#artisan-commands)
    * [Controller](#controller)
    * [Make](#make)
    * [Migrations](#migrations)
    * [Routes](#routes)
    * [Seeding](#seeding)
2. [Database](#database)
    * [Columns](#columns)
    * [Foreign Key Constraints](#foreign-key-constraints)
 
    

---
## Artisan commands

### Controller
| Command | Description |
| --------- | ------- |
|  `php artisan make:controller PhotoController` | Create a controller |
|  `php artisan make:controller PhotoController --resource` | Create a resource controller |
|  `php artisan make:controller PhotoController --resource --model=Photo` | Create a resource controller with model |


### Make
| Command | Description |
| --------- | ------- |
|  `php artisan make:middleware MiddlewareName` | Replace MiddlewareName with the actual name of the middleware |
|  `php artisan make:model User` | Create a model instance |
|  `php artisan make:model User -m` | Create a model instance and database migration|
|  `php artisan make:mail OrderShipped` | Create a mailable class |


### Migrations
| Command | Description |
| --------- | ------- |
|  `php artisan make:migration create_users_table` | Create a migration |
|  `php artisan make:migration create_users_table --create=users` | Create a new table |
|  `php artisan make:migration add_votes_to_users_table --table=users` | Edit Table |
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
|  `php artisan route:list` | Listing Your Routes |
|  `php artisan route:clear` |  |
|  `php artisan route:cache` | |


### Seeding
| Command | Description |
| --------- | ------- |
|  `php artisan make:seeder UsersTableSeeder` | Generate a seeder|
|  `php artisan db:seed` | Seeding your database  |
|  `php artisan db:seed --class=UsersTableSeeder` | Run specific seeder class  |
|  `php artisan migrate:refresh --seed` | Rollback and re-run all of your migrations |

---

## Database

### Columns
`$table->increments('id');`
`$table->unsignedInteger('user_id')->index();`
`$table->unsignedInteger('subject_id')->index();`

### Foreign Key Constraints
```php
public function up()
    {
        Schema::disableForeignKeyConstraints();

        Schema::table('offers', function (Blueprint $table) {
            $table->integer('region_id')->unsigned();
           
            $table->foreign('region_id')->references('id')->on('regions');
        });

        Schema::enableForeignKeyConstraints();
    }

    public function down()
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->dropForeign('offers_region_id_foreign');

            $table->dropColumn('region_id');
        });
    }
```
