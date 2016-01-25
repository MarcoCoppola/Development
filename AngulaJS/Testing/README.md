#Testing

1. [Unit Testing](#unit-testing)
  2. [Installation](#installation)  
    + [Karma](#karma)
    + [Jasmine](#jasmine)
    + [angular-mocks](#angular-mocks)
    + [PhantomJS](#PhantomJS)
  2. [Configuration](#configuration)
1.[2End2 Testing](#2end2-testing)    

##Unit Testing
###Karma
Karma is a tool built by the Angular team for running unit tests.
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

##2End2 Testing
