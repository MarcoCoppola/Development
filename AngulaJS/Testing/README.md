#Testing

1. [Unit Testing](#unit-testing)
  2. [Installation Tools](#installation)  
    + [Karma](#karma)
    + [Jasmine](#jasmine)
    + [angular-mocks](#angular-mocks)
    + [PhantomJS](#PhantomJS)
  2. [Configuration](#configuration)
1. [End-to-end Testing](#end-to-end-testing)
  * [Installing Testing Environment (Protractor)] (#installing-testing-environment)
  * [ngMockE2E](#ngmocke2e)
1. [Endpoint with Regular Expressions](#endpoint-with-regular-expressions)

##Unit Testing
###Karma
Karma is a tool built by the Angular team for running unit tests. It is a test runner.
```
# Install Karma:
npm install karma --save-dev
```

If you want to use karma from command line, you have installing `Karma CLI`
```
npm install -g karma-cli
```
###Jasmine
Jasmine is a framework for testing Angular apps.

```
# Install plugins that your project needs:
npm install karma-jasmine --save-dev
```
```
npm install karma-chrome-launcher --save-dev
```

###angular-mocks
Always make sure you install the version of angular-mocks that is the same version as the Angular library.
```
bower install angular-mocks#x.x.x --save-dev
```

### PhantomJS
we need to decide on a browser to run our unit tests. Karma supports most browsers, but the most popular choice is PhantomJS. It's a headless (no GUI) browser built on WebKit and is perfect for running automated unit tests.
```
npm install -g phantomjs
```

---

##Configuration
Creare una cartella `tests` e `tests/unit-tests`
Now we have to create a configuration file for Karma to instruct it which files to use for testing and which browser.
Into tests folder:
```
karma init unit-tests.conf.js
```

| Question | Answer | Description |
| -------- | ------ | ----------- |
| Which testing framework do you want to use?   | Jasmine | - |
|Use Require.js?|No|-|
|Do you want to capture a browser automatically?|PhantomJS|-|
|What is the location of your source and test files?| '../www/lib/ionic/js/ionic.bundle.js', '../www/app/**/*.js', '../www/lib/angular-mocks/angular-mocks.js', 'unit-tests/**/*.js'| - |
|Should any files be excluded? | <empty string> | - |
| Do you want Karma to watch all the files and run the tests on change?| Yes | - |

--- 

##End-to-end Testing
###Installing Testing Environment
+ Start by installing Protractor. It is an end-to-end testing framework for AngularJS. Protractor use Jasmine for its test syntax.
```
npm install -g protractor
```

+ Use the web manager to install the chrome-driver and selenium server.
```
webdriver-manager update
```
+ Create folders `tests` e `tests/e2e-tests`.

+ Create a protractor config file, `protractor.config.js` and copy to it the following code:

```javascript
exports.config = {  
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {                
                args: ['--disable-web-security']
            } 
        },
        baseUrl: 'http://localhost:8100',
        specs: [
            'e2e-tests/**/*.tests.js'
        ],
        jasmineNodeOpts: {
            showColors: true,
            isVerbose: true,
        }
};
```

### ngMockE2E
Follow this [link](#angular-mocks) to install.
Follow this [link](https://docs.angularjs.org/api/ngMockE2E)

---

##Endpoint with Regular Expressions

| Expression | Description |
|-----| ---------- |
|.|	any character except newline|
|\w \d \s	|word, digit, whitespace|
|\W \D \S	|not word, digit, whitespace|
|[abc]	|any of a, b, or c|
|[^abc]	|not a, b, or c|
|[a-g]	|character between a & g|
|^abc$	|start / end of the string|
|\b	|word boundary|
|\. \* \\	|escaped special characters|
|\t \n \r	|tab, linefeed, carriage return|
|\u00A9	|unicode escaped ©|
|(abc)	|capture group|
|\1	|backreference to group #1|
|(?:abc)	|non-capturing group|
|(?=abc)	|positive lookahead|
|(?!abc)	|negative lookahead|
|a* a+ a?	|0 or more, 1 or more, 0 or 1|
|a{5} a{2,}	|exactly five, two or more|
|a{1,3}	|between one & three|
|a+? a{2,}?	|match as few as possible|
|ab|cd|	match ab or cd|


|URL|Regular Espressions|
|:-----:|:---------------------:|
|`/user?`|`/\/user[?]$/`|
|`/user?date=123456&`|`/\/corsi\?((date)=\d{1,}&?)/`|
|`/user/1234`|`/\/user\/(.+)\//`|
|`/user/1234/article/567`|`/\/user\/(.+)\/article\/(.+)/`|
