# Ionic
1. [Side Menu](#side-menu)
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
## SIDE MENU
#### ion-side-menus
![Side Menu Structure](http://mcgivery.com/wp-content/uploads/2014/11/sidemenu.png)

#### ion-side-menu-content
In our `ion-side-menu-content`, we have a `ion-nav-bar` (with an `ion-nav-back-button`) and a `ion-nav-view`
``` javascript
<ion-side-menu-content>
    <ion-nav-bar class="bar-stable nav-title-slide-ios7">
      <ion-nav-back-button class="button-clear"><i class="icon ion-ios7-arrow-back"></i> Back</ion-nav-back-button>
    </ion-nav-bar>
    <ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view>
</ion-side-menu-content>
```

The ion-nav-bar creates a header bar at the top of our app that automatically contains the title (soon to be view-title in Beta 14) of the current view. It also contains a ion-nav-back-button which will generate a button then when clicked will go back a state.

The ion-nav-view is where our child states (the views of our app) will be inserted and live. Note that we have given it a name attribute of menuContent. This name will be used to reference to this ion-nav-view when we are building our states in the app’s config.
#### ion-side-menu
In the ion-side-menu half of our menu.html, we have a header (a visual element) and a list of ion-item where each item is a side menu link.
``` javascript
<ion-item menu-close href="#/app/search">
  Search
</ion-item>
```
Notice that these links are decorated with a attributes: menu-close.

menu-close is an Ionic Directive which causes the element, when clicked, to close the side menu. Without this attribute, clicking on the link will cause a the navigation to the new view, but will leave the sidemenu open. It will also clear the history stack and does not cause an animation between views with navigating. Due to the clearing of the history stack, the back button will not show when you navigate to the next state. (Official Docs)

---
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

### Ionic

For updating Ionic you can use `ionic lib update` to console.


### Plugins

For updating Plugins Ionic you can use `ionic state reset` to console.

---

