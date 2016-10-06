# ANDROID
1. [Activity]()
1. [Fragment](https://github.com/MaxTenco/Development/blob/master/Android/fragment.md)
2. [Networking and Models](#networking-and-models)
 * [Converting JSON to Models](#converting-json-to-models)
1. [Memory leaks](#memory-leak) 
1. [Tips and tricks](#tips-and-tricks)
 * [Hide Keyboard](#hide-keyboard)
 * [Starting new Activity](#starting-new-activity)
3. [Best Practices](#best-practices)
  * [Java packages architecture] (#java-packages-architecture)
  * [Handler Volley Error](#handler-volley-error)
  * [.gitignore for an Android Studio project](#gitignore-for-an-android-studio-project)
1. [Tutorial](#tutorial)
 	* [Selecting Items of a RecyclerView](#selecting-items-of-a-recyclerview)
1. [Android Studio](#android-studio)
	* [Plugins](#plugins)
4. [Link](#link) 


---
## Networking and Models
### Converting JSON to Models
* Nella risposta della chiamata verificare se esiste la chiave 
```javascript
if (Utility.checkKey(jsonObject, ID_STAZIONE))
{
    id = jsonObject.getInt(ID_STAZIONE);
}
else
{
    
}
```

* creare il metodo fromJson nel model
```javascript
public static Stazione fromSchedaStazioneJson(final JSONObject jsonObject)
    {
        Stazione stazione = new Stazione();

        int id = DEFAULT_VALUE_INT;
        String nome = DEFAULT_VALUE_STRING;

        try
        {
            // Id
            if (Utility.checkKey(jsonObject, ID_STAZIONE))
            {
                id = jsonObject.getInt(ID_STAZIONE);
            }

            // Nome
            if (Utility.checkKey(jsonObject, KEY_NOME_STAZ))
            {
                nome = jsonObject.getString(KEY_NOME_STAZ);
            }

           
            // Populate STAZIONE Model
            if (id != DEFAULT_VALUE_INT)
            {
                stazione.id = id;
                stazione.nome = nome;
            }

        } catch (JSONException e)
        {
            e.printStackTrace();
        }

        return stazione;
    }

```

---

## Memory leak
``` java
// Generally you get that error when you try to perform work after the Fragment is no longer attached to the Activity.
// In the callback that triggers the IllegalStateException add a check for isAdded
                                                        Activity activity = getActivity();
                                                        if (activity != null && isAdded())
                                                        {
                                                            C'è qualche riferimento alle viste
                                                        } else
                                                        {
                                                            log.e("Memory leak!");
                                                        }
```

---

## TIPS AND TRICKS
### Hide Keyboard
* In Fragment
``` java
private void hideKeyboard()
    {
        final InputMethodManager imm = (InputMethodManager) getActivity().getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(getView().getWindowToken(), 0);
    }
```
---
### Starting new Activity
#### From Activity
``` java
Intent intent = new Intent(FromActivity.this, ToActivity.class);
startActivity(intent);
```
---

## Best Practices

+ [Avoid Nested weights](http://www.rapidvaluesolutions.com/tech_blog/best-practices-for-android-user-interface/)

---

### Java packages architecture
```
project
├─ activities
├─ adapters
├─ fragments
├─ helpers
├─ interfaces
├─ models
├─ manager
├─ network
├─ services
```
--- 

### Handler Volley Error
``` java
 if (error instanceof TimeoutError || error instanceof NoConnectionError)
        {
            //TODO
        } else if (error instanceof AuthFailureError)
        {
            //TODO
        } else if (error instanceof ServerError)
        {
             //TODO
        } else if (error instanceof NetworkError)
        {
            //TODO
        } else if (error instanceof ParseError)
        {
            //TODO
        }
```

---

### .gitignore for an Android Studio project
See the follow [link](https://github.com/github/gitignore/blob/master/Android.gitignore).
[Solution](http://stackoverflow.com/questions/29052342/android-studio-git-gitignore-vs-project-settings-version-control-ignored)
---
## Tutorial
### Selecting Items of a RecyclerView

* Classe che estende onItemTouchListener
* Creare l'oggetto GestureDetection per catturare il long press Event
* L'activity deve implementare l'interfaccia ActionMode.Callback.
* I metodi da implementare sono:
	* onActionItemClicked()
	* onDestroyActionMode()

---

## Android Studio
### Plugins
* [ADB Idea](https://plugins.jetbrains.com/plugin/7380?pr=androidstudio)
	ADB Idea aims to speed up the day of an Android developer by giving access to crucial terminal commands. I found this tool helpful after the release of Android Studio 2.0, and the addition of Instant Run. Whilst it’s a great feature, sometimes the quick build doesn’t pick up small changes and you have to rebuild and reinstall the project. This makes quick access to ADB commands invaluable
* [Parcelable boilerplate code generation](https://github.com/mcharmas/android-parcelable-intellij-plugin)
* [Convert SVG to Android Vectors](https://plugins.jetbrains.com/plugin/8103)
	The mindset change of Material Design bought new approaches towards app icons, logos and static images. Asset formats changed from traditional image formats (.png, .jpg, etc …) to Vector Drawables. The SVG2VectorDrawable plugin let’s you convert SVG images to vector drawables (i.e. .xml files) so you can use them as layout drawables.
* [Data Transfer Object Generator](https://github.com/nvinayshetty/DTOnator)
* [Material Design Icon Generator](https://plugins.jetbrains.com/plugin/7647?pr=androidstudio)

---
## Link
* [Android Push Notifications using GCM, PHP & MySQL – Realtime Chat App](http://www.androidhive.info/2016/02/android-push-notifications-using-gcm-php-mysql-realtime-chat-app-part-1/)
* [Top 10 Most Common Mistakes That Android Developers Make: A Programming Tutorial] (http://www.toptal.com/android/top-10-most-common-android-development-mistakes)
* [RecyclerView Database Example | Slidenerd](https://www.youtube.com/watch?v=mxmAWsAMHgw&feature=em-subs_digest)
* [An Introduction to Model View Presenter on Android](http://code.tutsplus.com/tutorials/an-introduction-to-model-view-presenter-on-android--cms-26162)
* [Material Design Android Snackbar Tutorial](http://www.survivingwithandroid.com/2016/03/android-snackbar-tutorial.html)
