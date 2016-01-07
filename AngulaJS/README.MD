# AngulaJS
1. [Promise](#promise)
1. [Style Guide](#style-guide)
1. [Best Practies](#best-practies)
  * [ng-if vs ns-show](#ng-if-vs-ns-show)

## Promise
Se un errore viene gestito, la promise ritornata dal `then` è considerato **resolved**

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




- [ ] [Single Responsibility](#single-responsibility)
- [ ] [IIFE](#iife)
- [ ] [Modules](#modules)
- [ ] [Controllers](#controllers)
- [ ] [Services](#services)
- [ ] [Factories](#factories)
- [ ] [Data Services](#data-services)
- [ ] [Directives](#directives)
- [ ] [Resolving Promises for a Controller](#resolving-promises-for-a-controller)
- [ ] [Manual Annotating for Dependency Injection](#manual-annotating-for-dependency-injection)
- [ ] [Minification and Annotation](#minification-and-annotation)
- [ ] [Exception Handling](#exception-handling)
- [ ] [Naming](#naming)
- [ ] [Application Structure LIFT Principle](#application-structure-lift-principle)
- [ ] [Application Structure](#application-structure)
- [x] Modularity
- [x] Startup Logic
- [ ] [Angular $ Wrapper Services](#angular--wrapper-services)
- [ ] [Testing](#testing)
- [ ] [Animations](#animations)
- [x] Comments
- [ ] [JSHint](#js-hint)
- [x] JSCS
- [x] Constants
- [ ] [File Templates and Snippets](#file-templates-and-snippets)
- [ ] [Yeoman Generator](#yeoman-generator)
- [ ] [Routing](#routing)
- [ ] [Task Automation](#task-automation)
- [ ] [Filters](#filters)
- [ ] [Angular Docs](#angular-docs)
- [x] Contributing
- [x] License

## Best Practies
### ng-if vs ns-show

- `ng-if` will remove elements from DOM. This means that all your handlers or anything else attached to those elements will be lost. For example, if you bound a click handler to one of child elements, when ng-if evaluates to false, that element will be removed from DOM and your click handler will not work any more, even after ng-if later evaluates to true and displays the element. You will need to reattach the handler.
- `ng-show/ng-hide` does not remove the elements from DOM. It uses CSS styles to hide/show elements (note: you might need to add your own classes). This way your handlers that were attached to children will not be lost.
ng-if creates a child scope while ng-show/ng-hide does not
Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide

> Elements that are not in the DOM have less performance impact and your web app might appear to be faster when using ng-if compared to ng-show/ng-hide, the question you need to answer is whether you can remove element from DOM or not?
