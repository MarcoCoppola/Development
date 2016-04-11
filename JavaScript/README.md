# JavaScript
1. [Default value](#default-value)
2. [Functions](#functions)
 * [Patterns of invocation in Javascript](#patterns-of-invocation-in-javascript)
 * [Function Declarations vs. Function Expressions](#function-declarations-vs-function-expressions)
3. [IIFE - Immediately-Invoked Function Expression](#iife) 
4. [Strict Mode](#strict-mode)

--- 

## Default value
### Default parameters in EcmaScript 2015
Default function parameters allow formal parameters to be initialized with default values if no value or undefined is passed.
From ES6/ES2015, default parameters is in the language specification.

``` javascript
function read_file(file, delete_after = false) {
  // Code
}
```

---

##Functions
Le funzioni sono oggetti. Possono essere memorizzati in variabili, oggetti ed array.

###Patterns of invocation in Javascript
 1. **The method invocation pattern**
 
    Quando una funzione è memorizzata come una proprietà di un oggetto, prende il nome di **method** 
 1. The function invocation pattern
 1. The constructor invocation pattern
 1. The apply invocation pattern

###Function Declarations vs. Function Expressions
`Function Declaration` deve avere per forza un'identificativo mentre in una `Function Expression` è falcoltativo.
Le function declaration sono analizzate e valutate prima di ogni expression.
Si deve evitare di usare una Function Declaration all'interno di una condition statements poichè si possono avere comportamenti diversi a seconda del browser utilizzato. In questo caso usare Function Expressions.

```javascript
//Function Declaration
function add(a,b) {return a + b};

//Function Expression
var add = function(a,b) {return a + b}; // since it's part of an AssignmentExpression
```
More information follow the below links:
- [link](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
- [var functionName = function() {} vs function functionName() {}](http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

##IIFE
- This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.
- Don't introduce global variables.
- This is why, maybe, you confused this construction with an event-handler for window.onload, because it’s often used as this:
``` javascript
(function(){
    // all your code here
    var foo = function() {};
    window.onload = foo;
    // ...
})();
// foo is unreachable here (it’s undefined)
```
The function is executed right after it's created, not after it is parsed. The entire script block is parsed before any code in it is executed. Also, parsing code doesn't automatically mean that it's executed, if for example the IIFE is inside a function then it won't be executed until the function is called

##Strict Mode
The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.
###Why Strict Mode?
Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

###Declaring Strict Mode
Strict mode is declared by adding "use strict"; to the beginning of a JavaScript or a JavaScript function.

Declared at the beginning of a JavaScript file, it has global scope (all code will execute in strict mode):
``` Javascript
"use strict";
x = 3.14;       // This will cause an error (x is not defined)
```

### More information
Follow the below  [link](http://www.w3schools.com/js/js_strict.asp) 
