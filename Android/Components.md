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

    <include
        layout="@layout/app_bar_main"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>

    <android.support.design.widget.NavigationView
        android:id="@+id/nav_view"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:fitsSystemWindows="true"
        app:headerLayout="@layout/nav_header_main"
        app:menu="@menu/activity_main_drawer"/>

</android.support.v4.widget.DrawerLayout>
```

