#Style Guidelines

**Table of Contents**

1. [Naming](#naming) 
   * [File Names](#file-names)
   * [Controller Names](#controller-names)
   * [Factory And Service Names](#factory-and-service-names)
   * [Directive Component Names](#directive-component-names)
   * [Modules](#modules)
   * [Configuration](#configuration)
   * [Routes](#routes)
2. [Constants](#constants)

---

## Naming

### File Names

Pattern is `feature.type.js`.
*Why?*
* Provides a consistent way to quickly identify components.
* Provides pattern matching for any automated tasks.

    ```javascript
    // controllers
    user.controller.js

    // services/factories
    user.service.js
    
    // constants
    constants.js

    // module definition
    user.module.js

    // routes
    app.routes.js
    app.routes.spec.js

    // configuration
    app.config.js
    user.config.js
    ```

### Test File Names
###### [Style [Y122](#style-y122)]

  - Name test specifications similar to the component they test with a suffix of `spec`.

    *Why?*: Provides a consistent way to quickly identify components.

    *Why?*: Provides pattern matching for [karma](http://karma-runner.github.io/) or other test runners.

    ```javascript
    /**
     * recommended
     */
    avengers.controller.spec.js
    logger.service.spec.js
    avengers.routes.spec.js
    avenger-profile.directive.spec.js
    ```

### Controller Names

**Pattern**: Use UpperCamelCase and the suffix `Controller`.

  ```javascript
    angular
        .module
        .controller('UserLoginController', UserLoginController);

    function UserLoginController() { }
  ```
    
### Factory and Service Names
**Pattern**: Use camel-casing and the suffix `Service`.
Avoid prefixing factories and services with `$`. Only suffix service and factories with `Service` when it is not clear what they are (i.e. when they are nouns).

    *Why?*: Provides a consistent way to quickly identify and reference factories.

    *Why?*: Avoids name collisions with built-in factories and services that use the `$` prefix.

    *Why?*: Clear service names such as `logger` do not require a suffix.

    *Why?*: Service names such as `avengers` are nouns and require a suffix and should be named `avengersService`.

    ```javascript
    /**
     * recommended
     */

    // logger.service.js
    angular
        .module
        .factory('logger', logger);

    function logger() { }
    ```

    ```javascript
    /**
     * recommended
     */

    // credit.service.js
    angular
        .module
        .factory('creditService', creditService);

    function creditService() { }

    // customer.service.js
    angular
        .module
        .service('customerService', customerService);

    function customerService() { }
    ```

### Directive Component Names


  - Use consistent names for all directives using camel-case. Use a short prefix to describe the area that the directives belong (some example are company prefix or project prefix).

    *Why?*: Provides a consistent way to quickly identify and reference components.

    ```javascript
    /**
     * recommended
     */

    // avenger-profile.directive.js
    angular
        .module
        .directive('xxAvengerProfile', xxAvengerProfile);

    // usage is <xx-avenger-profile> </xx-avenger-profile>

    function xxAvengerProfile() { }
    ```  

### Modules


  - When there are multiple modules, the main module file is named `app.module.js` while other dependent modules are named after what they represent. For example, an admin module is named `admin.module.js`. The respective registered module names would be `app` and `admin`.

    *Why?*: Provides consistency for multiple module apps, and for expanding to large applications.

    *Why?*: Provides easy way to use task automation to load all module definitions first, then all other angular files (for bundling).

### Configuration


  - Separate configuration for a module into its own file named after the module. A configuration file for the main `app` module is named `app.config.js` (or simply `config.js`). A configuration for a module named `admin.module.js` is named `admin.config.js`.

    *Why?*: Separates configuration from module definition, components, and active code.

    *Why?*: Provides an identifiable place to set configuration for a module.

### Routes


  - Separate route configuration into its own file. Examples might be `app.route.js` for the main module and `admin.route.js` for the `admin` module. Even in smaller apps I prefer this separation from the rest of the configuration.

---

## Constants
Creare un file `constants.js`. Il nome deve essere plurale se indicano una collezione o singolare se uno stato. 

```javascript
    // Costanti usate nel modulo foo
    angular
        .module('foo')
        .constant('network', {
            ON_LINE: 'network_on_line',
            OFF_LINE: 'network_off_line'
        });
```

---
