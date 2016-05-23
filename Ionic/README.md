# Ionic
1. [Tips and Tricks](#tips-and-tricks)
  * [Reload the current view](#reload-the-current-view)
  * [Hide Back Button and show Menu Batton](#hide-back-button-and-show-menu-batton)
  * [Set Environment Variables](#environment-variables)
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
* Create `env-config.json` in path `www/app/`:
``` json
{
  "dev":{
    "sensitiveInfoEnabled": true,
    "logEnabled": false,
    "debugEnabled": true,
    "apiUrl": "'https://intraweb-svil.enel.com/atlante'"
  },

  "stage": {
    "sensitiveInfoEnabled": true,
    "logEnabled": true,
    "debugEnabled": true,
    "apiUrl": "'https://intraweb-coll.enel.com/atlante'"
  },

  "prod": {
    "sensitiveInfoEnabled": false,
    "logEnabled": false,
    "debugEnabled": false,
    "apiUrl": "'https://intraweb.enel.com/atlante'"
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
    //console.warn(new RegExp(to_replace, "g"));
    var result = data.replace(new RegExp(to_replace, "g"), replace_with);
    fs.writeFileSync(filename, result, 'utf8');
}

var target = "prod";
if (process.env.TARGET)
{
    target = process.env.TARGET;
}

if (rootdir)
{
    var ourconfigfile = path.join(rootdir, "www", "app", "env-config.json");
    var configobj = JSON.parse(fs.readFileSync(ourconfigfile, 'utf8'));

    // Check the platform type
    var root = "platforms";
    var filestoreplace = [];
    var platform = process.env.CORDOVA_PLATFORMS;
    console.log("Platform:", platform);

    if (platform === "android")
    {
        root += "/android/assets/www/app"
    }
    else if (platform === "ios")
    {
        root += "/android/ios/www/app"
    }
    else {
        console.error("Platform is not defined!");
    }

    // Set files
    filestoreplace.push(root + "/services/constant.js");
    filestoreplace.push(root + "/controllers/login.js");

    // Replace
    filestoreplace.forEach(function(val, index, array)
    {
        var fullfilename = path.join(rootdir, val);
        if (fs.existsSync(fullfilename))
        {

            // CONFIGURE HERE
            // with the names of the token values. For example, below we are looking for the token /*REP*/ 'api.example.com' /*REP*/ and will replace that token
            //replace_string_in_file(fullfilename, "/\\*REP\\*/ 'api.example.com' /\\*REP\\*/", configobj[target].datahostname);
            replace_string_in_file(fullfilename, "/\\*ON_DEVICE\\*/ (.)* /\\*ON_DEVICE\\*/", true);
            replace_string_in_file(fullfilename, "/\\*LOG_ENABLED\\*/ (.)* /\\*LOG_ENABLED\\*/", configobj[target].logEnabled);
            replace_string_in_file(fullfilename, "/\\*DEBUG_ENABLED\\*/ (.)* /\\*DEBUG_ENABLED\\*/", configobj[target].debugEnabled);
            replace_string_in_file(fullfilename, "/\\*BASE_ENEL\\*/ (.)* /\\*BASE_ENEL\\*/", configobj[target].apiUrl);

            if (!configobj[target].sensitiveInfoEnabled)
            {
                replace_string_in_file(fullfilename, "/\\*SENSITIVE_STRING\\*/ (.)* /\\*SENSITIVE_STRING\\*/", "''");
            }
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

