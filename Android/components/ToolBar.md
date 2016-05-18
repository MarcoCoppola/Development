#  ToolBar
#####Table of Contents
1. [Overview](#overview)
2. [Adding Action Items]
1. [Reusing the Toolbar](#reusing-the-toolbar)

---
## Overview
The toolbar was formerly known as the action bar. It is now a more customizable view with the same functionalities.

![alt text](https://cms-assets.tutsplus.com/uploads/users/425/posts/24435/image/scrollable-regions-within-android-app.png)

[Link](https://github.com/codepath/android_guides/wiki/Using-the-App-ToolBar)

---
## Adding Action Items

When you want to add primary actions to the Toolbar, you add the items to the activity context menu and if properly specified, they will automatically appear at the top right as icons in the Toolbar.

An activity populates the toolbar from within the `onCreateOptionsMenu()` method:

```java
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }
```
Name of resource view [here](https://github.com/MaxTenco/Development/blob/master/Android/style-guidelines.md#menu-files).

Entries in the toolbar are typically called actions. Use this method to inflate a menu resource that defines all the action items within a `res/menu.xml` file, for example:

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto">
    <item
        android:id="@+id/miCompose"
        android:icon="@drawable/ic_compose"
        app:showAsAction="ifRoom"
        android:title="Compose">
    </item>
    <item
        android:id="@+id/miProfile"
        android:icon="@drawable/ic_profile"
        app:showAsAction="ifRoom|withText"
        android:title="Profile">
    </item>
</menu>
```

You also should note that the `xmlns:app` namespace must be defined in order to leverage the `showAsAction` option.  The reason is that a [compatibility library](Migrating-to-the-AppCompat-Library#menu-xml-changes) is used to support the `showAsAction="ifRoom"` option.  This option is needed to show the item directly in the action bar as an icon. If there's not enough room for the item in the action bar, it will appear in the action overflow. If `withText` is specified as well (as in the second item), the text will be displayed with the icon.

The above code results in two action icons being displayed:

<img src="http://i.imgur.com/yI4akxQ.png" width="400" />

**Note:** The above code refers to the `@drawable/ic_compose` and `@drawable/ic_profile` resources which would have to exist for this to compile. To generate ActionBar icons, be sure to use the **Asset Studio** in Android Studio. To create a new Android icon set, right click on a `res/drawable` folder and invoke **New -> Image Asset**.

### Handling ActionBar Clicks

There are two ways to handle the click for an ActionBar item. The first approach is you can use the `android:onClick` handler in the menu XML, similar to handling button clicks:

```xml
<menu xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto">
    <item
        android:id="@+id/item1"
        android:icon="@drawable/ic_compose"
        android:onClick="onComposeAction"
        app:showAsAction="ifRoom"
        android:title="Compose">
    </item>
</menu>
```

and then define the method `onComposeAction` in the parent activity before attempting to run the application or an exception will be thrown for the missing method:

```java
public class MainActivity extends AppCompatActivity {
  public void onComposeAction(MenuItem mi) {
     // handle click here
  }
}
```

The second approach is to use the `onOptionsItemSelected()` method. Using the MenuItem passed to this method, you can identify the action by calling getItemId(). This returns the unique ID provided by the item tag's id attribute so you can perform the appropriate action:

```java
@Override
public boolean onOptionsItemSelected(MenuItem item) {
    // Handle presses on the action bar items
    switch (item.getItemId()) {
        case R.id.miCompose:
            composeMessage();
            return true;
        case R.id.miProfile:
            showProfileView();
            return true;
        default:
            return super.onOptionsItemSelected(item);
    }
}
```

and then you can handle all the action buttons in this single method.
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
