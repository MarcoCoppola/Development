# Best Practices

**Table of Contents**
1. HTML/CSS
1. Abstract Class

---

## HTML/CSS
### Use alternative text on <img> tags for clean code principles validity.

This attribute plays vital role for SEO, search engines, web crawlers, screen readers, etc.

**Bad code:**
``` html
<img src="demo.jpg">
```
**Good code:**
``` html
<img src="demo.jpg" alt="This is placeholder of the image">
```

### Use kebab-case (spinal-case).

For names, try to use kebab-case (spinal-case) and not use camelCase, or under_score. Use under_score only when using BEM, though if you are using Bootstrap, it’s better to keep consistent and go with - as a delimiter.

**Bad code:**
``` html
<section class="section_featured_Listing">
  <h1 class="largeTitle">H1 title</h1>
</section>
```

**Good code:**
``` html
<section class="section-featured-listing">
  <h1 class="large-title">H1 title</h1>
</section>
```

kebab-case is more readable then camelCase and under_score.


### Use meaningful names that can be understood by anyone, keep them short.

The names of classes should look like .noun-adjective.

Try to use common names of classes instead of writing content specific names. It makes code more readable

**Bad code:**
``` html
<div class="team-wrapper">
  <button class="large-button-green"></button>
  <p class="greenText-john-smith-description"></p>
  <div class="white-bg"></div>
</div>
```

**Good code:**
``` html
<div class="section-team">
  <button class="btn-lg btn-success"></button>
  <p class="text-success"></p>
  <div class="bg-white"></div>
</div>
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

