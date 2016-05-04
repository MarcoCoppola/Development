#  ToolBar
#####Table of Contents
1. [Reusing the Toolbar](#reusing-the-toolbar)

---
The toolbar was formerly known as the action bar. It is now a more customizable view with the same functionalities.

![alt text](https://cms-assets.tutsplus.com/uploads/users/425/posts/24435/image/scrollable-regions-within-android-app.png)

[Link](https://github.com/codepath/android_guides/wiki/Using-the-App-ToolBar)

## Reusing the Toolbar

First, define your toolbar in a layout file in `res/layout/toolbar_main.xml`:

```xml
<android.support.v7.widget.Toolbar
    android:id="@+id/toolbar"
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="?attr/actionBarSize"
    android:background="?attr/colorPrimary"
    app:layout_scrollFlags="scroll|enterAlways"
    app:popupTheme="@style/ThemeOverlay.AppCompat.Light"
    />
```

Next, we can use the `<include />` tag to load the toolbar into our activity layout XML:

```xml
    
    <include
        layout="@layout/toolbar_main"
       /> 

```

This allows us to create a consistent navigation experience across activities or configuration changes.
