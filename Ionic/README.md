# Ionic
1. [Tips and Tricks](#tips-and-tricks)
  * [Reload the current view](#reload-the-current-view)
  * [Hide Back Button and show Menu Batton](#hide-back-button-and-show-menu-batton)
1. [End-to-end testing with Appium and Protractor](#end-to-end-testing-with-appium-and-protractor)
2. [Update](#update)
    * [Ionic](#ionic-1)
    * [Plugins](#plugins)
3. 

---
##TIPS AND TRICKS
### Reload the current view
``` javascript
$state.go($state.current, {}, {reload: true});
```

### Hide Back Button and show Menu Batton 
* Insert `hide-back-button="true"` in `ion-view` tag on the child view.

* In the menu.html set this: `<ion-side-menus enable-menu-with-back-views="true">`.


---
## End-to-end testing with Appium and Protractor
See the follow link: [End-to-end testing an Ionic application with Appium and Protractor](http://tombuyse.com/end-to-end-testing-an-ionic-application-with-appium-and-protractor/)

---

## UPDATE

###IONIC

For updating Ionic you can use `ionic lib update` to console.


### Plugins

For updating Plugins Ionic you can use `ionic state reset` to console.

---

