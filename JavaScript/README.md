# JavaScript
1. [Functions](#functions)
2. [Strict Mode](#strict-mode)

##Functions
Le funzioni sono oggetti. Possono essere memorizzati in variabili, oggetti ed array.

###Patterns of invocation in Javascript
 1. **The method invocation pattern**
 
    Quando una funzione è memorizzata come una proprietà di un oggetto, prende il nome di **method** 
 1. The function invocation pattern
 1. The constructor invocation pattern
 1. The apply invocation pattern

###Function Declarations vs. Function Expressions
More information follow the below [link](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
[var functionName = function() {} vs function functionName() {}](http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

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
