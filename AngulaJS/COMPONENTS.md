# Components

1. [Select](#select)

---

## Select

* Initialize the select
  ``` Javascript
  $scope.nameSelect = {selected: '', options: []};
  ```

* Populate the select:
  
  ``` Javascript
  /**
  * Populates the select of Name
  */
  function populateNameSelect()
  {
    var options = ['A', 'B', 'C'];
    $scope.nameSelect.options = options;
  }
  ```
* Method on change item:
``` Javascript
  /**
  * Event when the Name Select changes the selected value
  */
  function onChangeName()
  {
         
  }
  ```

* View
  * With only value
  ``` HTML
   <select ng-options="item for item in nameSelect.options"
           ng-model="nameSelect.selected"
           ng-change="onChangeName()">
    </select>
  ```
  * Selected the empty value option
  ``` HTML
    <option style="display:none" value="">Select...</option>
  ```
