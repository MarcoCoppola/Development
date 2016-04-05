# ANDROID
1. [Tips and tricks](#tips-and-tricks)
 * [Hide Keyboard](#hide-keyboard) 
3. [Best Practices](#best-practices)
  * [Java packages architecture] (#java-packages-architecture)
  * [Handler Volley Error](#handler-volley-error)
  * [.gitignore for an Android Studio project](#gitignore-for-an-android-studio-project)
4. [Link](#link) 


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

---
## Link
* [Android Push Notifications using GCM, PHP & MySQL – Realtime Chat App](http://www.androidhive.info/2016/02/android-push-notifications-using-gcm-php-mysql-realtime-chat-app-part-1/)
* [Top 10 Most Common Mistakes That Android Developers Make: A Programming Tutorial] (http://www.toptal.com/android/top-10-most-common-android-development-mistakes)
* [RecyclerView Database Example | Slidenerd](https://www.youtube.com/watch?v=mxmAWsAMHgw&feature=em-subs_digest)
* [An Introduction to Model View Presenter on Android](http://code.tutsplus.com/tutorials/an-introduction-to-model-view-presenter-on-android--cms-26162)
* [Material Design Android Snackbar Tutorial](http://www.survivingwithandroid.com/2016/03/android-snackbar-tutorial.html)
