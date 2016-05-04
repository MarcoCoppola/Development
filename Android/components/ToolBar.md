#  ToolBar
######Table of Contents
1. Reusing the Toolbar

---

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
