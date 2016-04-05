#Components

1. [Dividers](#dividers)
2. [Navigation View](#navigation-view)

---

## Dividers

* **Color**
``` xml
  <color name="divider">#e0e0e0</color>
```

* **Style**
``` xml
 <style name="Material.Divider">
        <item name="android:layout_width">match_parent</item>
        <item name="android:layout_height">1dp</item>
        <item name="android:background">@color/divider</item>
    </style>
```

* **View**
``` xml
  <ImageView
     style="@style/Material.Divider"
     />
```

---

## Navigation View
NavigationView makes adding navigation drawer to your app easier than before.

You can nflate your navigation items through a menu resource.

app:headerLayout attribute controls the (optional) layout used for the header.
app:menu attribute is the menu resource for the navigation items (which can also be updated at runtime).

### Header
Layout used for the header. It's optional.
This View is basically the top part of the navigation drawer, which holds the profile picture, name and email etc. You need to define this in a separate layout file we would look into that in just a moment.

**/res/layout/nav_header.xml**

``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="@dimen/nav_header_height"
              android:background="@drawable/side_nav_bar"
              android:gravity="bottom"
              android:orientation="vertical"
              android:paddingBottom="@dimen/activity_vertical_margin"
              android:paddingLeft="@dimen/activity_horizontal_margin"
              android:paddingRight="@dimen/activity_horizontal_margin"
              android:paddingTop="@dimen/activity_vertical_margin"
              android:theme="@style/ThemeOverlay.AppCompat.Dark">

    <ImageView
        android:id="@+id/imageView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:paddingTop="@dimen/nav_header_vertical_spacing"
        android:src="@android:drawable/sym_def_app_icon"/>

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:paddingTop="@dimen/nav_header_vertical_spacing"
        android:text="Android Studio"
        android:textAppearance="@style/TextAppearance.AppCompat.Body1"/>

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="android.studio@android.com"/>

</LinearLayout>

```

### Menu

### DrawerLayout
NavigationView should go inside DrawerLayout.

**/res/layout/activity_main.xml**

``` xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.v4.widget.DrawerLayout
    android:id="@+id/drawer_layout"
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fitsSystemWindows="true"
    tools:openDrawer="start">

    <!-- START - Layout to include -->
    <include
        layout="@layout/app_bar_main"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>
    <!-- END - Layout to include -->
    

    <android.support.design.widget.NavigationView
        android:id="@+id/nav_view"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:fitsSystemWindows="true"
        app:headerLayout="@layout/nav_header"
        app:menu="@menu/activity_main_drawer"/>

</android.support.v4.widget.DrawerLayout>
```

