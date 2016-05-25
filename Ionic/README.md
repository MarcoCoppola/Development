# Ionic
1. [Tips and Tricks](#tips-and-tricks)
  * [Reload the current view](#reload-the-current-view)
  * [Hide Back Button and show Menu Batton](#hide-back-button-and-show-menu-batton)
  * [Set Environment Variables](#environment-variables)
1. [Publishing](#publishing)
1. [End-to-end testing with Appium and Protractor](#end-to-end-testing-with-appium-and-protractor)
2. [Update](#update)
    * [Ionic](#ionic-1)
    * [Plugins](#plugins)

---
##TIPS AND TRICKS
### Reload the current view
``` javascript
$state.go($state.current, {}, {reload: true});
```

### Hide Back Button and show Menu Batton 
* Insert `hide-back-button="true"` in `ion-view` tag on the child view.

* In the menu.html set this: `<ion-side-menus enable-menu-with-back-views="true">`.


### Environment Variables
* Copy `env-config.json` in path `app/hooks/`
* Copy `020_set_environment.js` in `hooks/after_prepare/`

---
## End-to-end testing with Appium and Protractor
See the follow link: [End-to-end testing an Ionic application with Appium and Protractor](http://tombuyse.com/end-to-end-testing-an-ionic-application-with-appium-and-protractor/)

---

## Publishing
* (cordova hook) Lint your javascript (this step is needed because before minifying and obfuscating we need to ensure that there are no javascript errors)

### Lint your javascript
* Install these npm packages. Run these commands to install them.
	* `npm install jshint --save-dev`
	* `npm install async --save-dev`
	
* Copy the following cordova hooks
	* In before_prepare folder copy [these]() files
	* Give execution permissions to all of them, run `chmod +x file_name`
* We are ready to test javascript linting, run this command and you will see that jshint is working
	* `ionic build ios [android]`

---

## UPDATE

###IONIC

For updating Ionic you can use `ionic lib update` to console.


### Plugins

For updating Plugins Ionic you can use `ionic state reset` to console.

---

