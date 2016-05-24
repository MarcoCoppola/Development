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



if (rootdir)
{
    var ourconfigfile = path.join(rootdir, "hooks", "env-config.json");
    var configobj = JSON.parse(fs.readFileSync(ourconfigfile, 'utf8'));

    // Check Env
    var target = configobj.env;
    if (process.env.TARGET)
    {
        target = process.env.TARGET;
    }

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
