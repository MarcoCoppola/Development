# Components

1. [Select](#select)

---

## Select
``` Javascript
SELECT_INIT: {selected: '', options: []}
```

``` Javascript
$scope.nameSelect = SELECT_INIT;
```

* Method to initialize the select:
  
  ``` Javascript
  /**
  * Initializes the select of Name
  */
  function initNameSelect()
  {
    var options = ['A', 'B', 'C'];
    $scope.nameSelect.options = options;
  }
  ```
* View
  * With only value
  ``` HTML
   <select ng-options="item for item in nameSelect.options"
           ng-model="nameSelect.selected">
  ```
  * Selected the empty value option
  ``` HTML
    <option style="display:none" value="">Select...</option>
  ```
