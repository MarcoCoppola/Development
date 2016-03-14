# AngulaJS
1. [Components](https://github.com/MaxTenco/Development/blob/master/AngulaJS/components.md) 
1. [Promise](#promise)
1. [Style Guide](#style-guide)
1. [Naming](#naming) 
   * [File Names](#file-names)
   * [Controller Names](#controller-names)
   * [Factory And Service Names](#factory-and-service-names)
   * [Directive Component Names](#directive-component-names)
   * [Modules](#modules)
   * [Configuration](#configuration)
   * [Routes](#routes)
1. [i18n](#i18n)
1. [Best Practies](#best-practies)
   * [Funzioni con un nome vs funzioni anonime](#funzioni-con-un-nome-vs-funzioni-anonime)
   * [Identificazione manuale delle dipendenze](#indentificazione-manuale-delle-dipendenze)
   * [IIFE - Immediately Invoked Function Expression](#iife)
   * [ng-if vs ns-show](#ng-if-vs-ns-show)
1. [Check the used version](#check-the-used-version)
1. [Links](#links) 
 

## Promise
- [Exploring Asynchronous Promise-Based Workflows In AngularJS](http://www.bennadel.com/blog/2772-exploring-asynchronous-promise-based-workflows-in-angularjs.htm)

---

## Style Guide
1.[Constants](#constants)

## Constants
Creare un file `constants.js`

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

## i18n
Follow this [link](https://docs.angularjs.org/guide/i18n) and [link](https://github.com/angular/angular.js/tree/master/src/ngLocale).

---

## Best Practies

### Funzioni con un nome vs funzioni anonime

  Usa funzioni che hanno un nome piuttosto che passare una funzione anonima come in una callback.

  *Perché?*: Ciò produce codice maggiormente leggibile, è più facile farne il debug, e riduce la quantità di codice posto dentro una callback.

  ```javascript
  /* evitare */
  angular
      .module('app')
      .controller('DashboardController', function() { });
      .factory('logger', function() { });
  ```

  ```javascript
  /* consigliato */

  // dashboard.js
  angular
      .module('app')
      .controller('DashboardController', DashboardController);

  function DashboardController() { }
  ```

  ```javascript
  // logger.js
  angular
      .module('app')
      .factory('logger', logger);

  function logger() { }
  ```

---

### Indentificazione manuale delle dipendenze


  - Usa `$inject` per identificare manualmente le tue dipendenze per i componenti di Angular.

    *Perché?*: Questa tecnica rispecchia la tecnica usata da [`ng-annotate`](https://github.com/olov/ng-annotate), che raccomando per l'automazione della creazione della minificazione sicura delle dipendenze. Se `ng-annotate` rileva che una iniezione è stata fatta, non la duplicherà.

    *Perché?*: Questo salvaguarda le tue dipendenze dall'essere vulnerabili alla questione della minificazione quando i parametri possono essere passati con nomi ridotti. Per esempio, `common` e `dataservice` possono diventare `a` o `b` e non essere più trovati da Angular.

    *Perché?*: Evita la creazione di dipendenze sulla stessa linea dal momento che lunghe liste possono essere difficili da leggere nell'array. Inoltre può essere fuorviante che l'array è una serie di stringhe mentre l'ultimo elemento è la funzione del componente.

    ```javascript
    /* evitare */
    angular
        .module('app')
        .controller('DashboardController',
            ['$location', '$routeParams', 'common', 'dataservice',
                function DashboardController($location, $routeParams, common, dataservice) {}
            ]);
    ```

    ```javascript
    /* evitare */
    angular
      .module('app')
      .controller('DashboardController',
         ['$location', '$routeParams', 'common', 'dataservice', Dashboard]);

    function Dashboard($location, $routeParams, common, dataservice) {
    }
    ```

    ```javascript
    /* consigliato */
    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location', '$routeParams', 'common', 'dataservice'];

    function DashboardController($location, $routeParams, common, dataservice) {
    }
    ```

    Nota: Quando la tua funzione si trova dopo una dichiarazione di return, `$inject` potrebbe essere non raggiungibile (ciò può accadere in una directive). Puoi risolvere ciò sia spostando il Controller fuori dalla directive.

    ```javascript
    /* evitare */
    // dentro la definizione di una directive
    function outer() {
        var ddo = {
            controller: DashboardPanelController,
            controllerAs: 'vm'
        };
        return ddo;

        DashboardPanelController.$inject = ['logger']; // Non raggiungibile
        function DashboardPanelController(logger) {
        }
    }
    ```

    ```javascript
    /* consigliato */
    // fuori la definizione di una directive
    function outer() {
        var ddo = {
            controller: DashboardPanelController,
            controllerAs: 'vm'
        };
        return ddo;
    }

    DashboardPanelController.$inject = ['logger'];
    function DashboardPanelController(logger) {
    }
    ```
---

### IIFE
Racchiudere i componenti di Angular in una Immediately Invoked Function Expression (IIFE) (Espressione di funzione immediatamente chiamata).

> Genera una variable scope per ogni file, evitando collissioni di variabili.

Una IIFE rimuove le variabili dallo scope globale. Questo aiuta a prevenire che variabili e dichiarazioni di funzione vivano più del previsto nello scope globale, inoltre aiuta ad evitare la collisione di variabili.

Quando il tuo codice è minificato e raggruppato in un file singolo per il rilascio ad un server di produzione, potresti avere collisioni di variabili e parecchie variabili globali. Una IIFE ti protegge in entrambi i casi fornendo uno scope variabile per ogni file.

  ```javascript
  /* evitare */
  // logger.js
  angular
      .module('app')
      .factory('logger', logger);

    // La funzione logger è aggiunta come variabile globale
  function logger() { }

  // storage.js
  angular
      .module('app')
      .factory('storage', storage);

    // La funzione storage è aggiunta come variabile globale
  function storage() { }
  ```


  ```javascript
  /**
   * consigliato
   *
   * non ci sono più variabili globali
   */

  // logger.js
  (function() {
      'use strict';

      angular
          .module('app')
          .factory('logger', logger);

      function logger() { }
  })();

  // storage.js
  (function() {
      'use strict';

      angular
          .module('app')
          .factory('storage', storage);

      function storage() { }
  })();
  ```

---

### ng-if vs ns-show

- `ng-if` will remove elements from DOM. This means that all your handlers or anything else attached to those elements will be lost. For example, if you bound a click handler to one of child elements, when ng-if evaluates to false, that element will be removed from DOM and your click handler will not work any more, even after ng-if later evaluates to true and displays the element. You will need to reattach the handler.
- `ng-show/ng-hide` does not remove the elements from DOM. It uses CSS styles to hide/show elements (note: you might need to add your own classes). This way your handlers that were attached to children will not be lost.
ng-if creates a child scope while ng-show/ng-hide does not
Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide

> Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide, the question you need to answer is whether you can remove element from DOM or not?

### Check the used version
Angular does not have a command line tool.

You can get the version number from the JavaScript file `angular.js`.

---

## Links
* [Caching HTTP results in Angular](http://www.codelord.net/2016/01/27/caching-http-results-in-angular/)
