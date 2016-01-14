# AngulaJS
1. [Promise](#promise)
1. [Style Guide](#style-guide)
1. [Best Practies](#best-practies)
   * [IIFE - Immediately Invoked Function Expression](#iife)
   * [ng-if vs ns-show](#ng-if-vs-ns-show)
1. [Check the used version](#check-the-used-version)
 

## Promise
- [Exploring Asynchronous Promise-Based Workflows In AngularJS](http://www.bennadel.com/blog/2772-exploring-asynchronous-promise-based-workflows-in-angularjs.htm)

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

## Best Practies
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

  
### ng-if vs ns-show

- `ng-if` will remove elements from DOM. This means that all your handlers or anything else attached to those elements will be lost. For example, if you bound a click handler to one of child elements, when ng-if evaluates to false, that element will be removed from DOM and your click handler will not work any more, even after ng-if later evaluates to true and displays the element. You will need to reattach the handler.
- `ng-show/ng-hide` does not remove the elements from DOM. It uses CSS styles to hide/show elements (note: you might need to add your own classes). This way your handlers that were attached to children will not be lost.
ng-if creates a child scope while ng-show/ng-hide does not
Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide

> Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide, the question you need to answer is whether you can remove element from DOM or not?

### Check the used version
Angular does not have a command line tool.

You can get the version number from the JavaScript file `angular.js`.
