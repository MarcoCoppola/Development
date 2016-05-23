# Ionic
1. [Tips and Tricks](#tips-and-tricks)
  * [Reload the current view](#reload-the-current-view)
  * [Hide Back Button and show Menu Batton](#hide-back-button-and-show-menu-batton)
  * [Set Environment Variables](#environment-variables)
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


### Environment Variables
* Create `env-config.json` in path `www/app/`:
``` json
{
  "dev":
  {
    "datahostname" : "'qa-api.mydomain.com'"
  },

  "prod":
  {
    "datahostname" : "'api.mydomain.com'"
  }
}
```
* Create `020_set_environment.js` in `hooks/after_prepare/`:
``` javascript
#!/usr/bin/env node

// this plugin replaces arbitrary text in arbitrary files
//
// Look for the string CONFIGURE HERE for areas that need configuration
//

var fs = require('fs');
var path = require('path');

var rootdir = process.argv[2];

function replace_string_in_file(filename, to_replace, replace_with)
{
    var data = fs.readFileSync(filename, 'utf8');

    var result = data.replace(new RegExp(to_replace, "g"), replace_with);
    fs.writeFileSync(filename, result, 'utf8');
}

var target = "stage";
if (process.env.TARGET)
{
    target = process.env.TARGET;
}

if (rootdir)
{
    var ourconfigfile = path.join(rootdir, "www", "app", "env-config.json");
    var configobj = JSON.parse(fs.readFileSync(ourconfigfile, 'utf8'));

    // CONFIGURE HERE
    // with the names of the files that contain tokens you want replaced.  Replace files that have been copied via the prepare step.
    var filestoreplace = [
        // android
        "platforms/android/assets/www/app/resources/constants.js",
        // ios
        //"platforms/ios/www/index.html",
    ];
    filestoreplace.forEach(function(val, index, array)
    {
        var fullfilename = path.join(rootdir, val);
        if (fs.existsSync(fullfilename))
        {

            // CONFIGURE HERE
            // with the names of the token values. For example, below we are looking for the token /*REP*/ 'api.example.com' /*REP*/ and will replace that token
            //replace_string_in_file(fullfilename, "/\\*REP\\*/ 'api.example.com' /\\*REP\\*/", configobj[target].datahostname);
            replace_string_in_file(fullfilename, "/\\*ON_DEVICE\\*/ false /\\*ON_DEVICE\\*/", 'true');
            // ... any other configuration
        }
        else
        {
            console.warn("missing: " + fullfilename);
        }
    });
}
```

* Define the string to replace
``` javascript
 ON_DEVICE:  /*ON_DEVICE*/ false /*ON_DEVICE*/,
```


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

