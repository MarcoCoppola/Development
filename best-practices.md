# Best Practices

**Table of Contents**
1. HTML/CSS
1. Abstract Class

---

## HTML/CSS
#### Use alternative text on <img> tags for clean code principles validity.

This attribute plays vital role for SEO, search engines, web crawlers, screen readers, etc.

Bad code:
``` html
<img src="demo.jpg">
```
Good code:
``` html
<img src="demo.jpg" alt="This is placeholder of the image">
```
---

## Abstract Class
``` php
abstract class Repository {
 
    /**
     * @var App
     */
    private $app;
 
    /**
     * @var
     */
    protected $model;
 
    /**
     * @param App $app
     * @throws \Bosnadev\Repositories\Exceptions\RepositoryException
     */
    public function __construct(App $app) {
        $this->app = $app;
        $this->makeModel();
    }
 
    /**
     * Specify Model class name
     * 
     * @return mixed
     */
    abstract function model();
 
    /**
     * @return Model
     * @throws RepositoryException
     */
    public function makeModel() {
        $model = $this->app->make($this->model());
 
        if (!$model instanceof Model)
            throw new RepositoryException("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");
 
        return $this->model = $model;
    }
}
```

``` php
class ActorRepository extends Repository {
 
    /**
     * Specify Model class name
     *
     * @return mixed
     */
    function model()
    {
        return 'Bosnadev\Models\Actor';
    }
}
```

