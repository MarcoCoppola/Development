#Components

1. [Dividers](#dividers)
2. [Navigation View](#navigation-view)
3. [RecyclerView](#recyclerview)
4. [Toolbar](#toolbar)

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

## Navigation View (Non completo)
NavigationView makes adding navigation drawer to your app easier than before.

You can nflate your navigation items through a menu resource.

app:headerLayout attribute controls the (optional) layout used for the header.
app:menu attribute is the menu resource for the navigation items (which can also be updated at runtime).

### Style
* **\res\values\dimens.xml**
``` xml
   <!-- Navigation View-->
    <dimen name="nav_header_vertical_spacing">16dp</dimen>
    <dimen name="nav_header_height">160dp</dimen>
```

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
**/res/layout/navigation_drawer.xml**
``` xml
<?xml version="1.0" encoding="utf-8"?>
<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <group android:checkableBehavior="single">
        <item
            android:id="@+id/nav_camera"
            android:icon="@drawable/ic_menu_camera"
            android:title="Import"/>
        <item
            android:id="@+id/nav_gallery"
            android:icon="@drawable/ic_menu_gallery"
            android:title="Gallery"/>
        <item
            android:id="@+id/nav_slideshow"
            android:icon="@drawable/ic_menu_slideshow"
            android:title="Slideshow"/>
        <item
            android:id="@+id/nav_manage"
            android:icon="@drawable/ic_menu_manage"
            android:title="Tools"/>
    </group>

    <item android:title="Communicate">
        <menu>
            <item
                android:id="@+id/nav_share"
                android:icon="@drawable/ic_menu_share"
                android:title="Share"/>
            <item
                android:id="@+id/nav_send"
                android:icon="@drawable/ic_menu_send"
                android:title="Send"/>
        </menu>
    </item>

</menu>

```

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
---

## RecyclerView

### xml
* RecyclerView
``` xml
  <android.support.v7.widget.RecyclerView
                android:id="@+id/recycler_name"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                />
```

* Create `row_name.xml`


### Adapter
```java
public class NameAdapter extends RecyclerView.Adapter<NameAdapter.NameViewHolder>
{
    private ArrayList<name> mNameList;
    private LayoutInflater mInflater;
    
    public NameAdapter(Context context)
    {
        mNameList = new ArrayList<>();
        mInflater = LayoutInflater.from(context);
    }
    
    public void setNameList(ArrayList<Fermata> fermataList)
    {
        this.mNameList = nameList;
        notifyItemChanged(0, nameList.size());
    }
    
    @Override
    public NameAdapter onCreateViewHolder(ViewGroup parent, int viewType)
    {
        View view = mInflater.inflate(R.layout.row_name, parent, false);  // Rappresenta la root della vista
        
        return new NameViewHolder(view);
    }

    @Override
    public void onBindViewHolder(FermataViewHolder holder, int position)
    {

    }

    @Override
    public int getItemCount()
    {
        return mNameList.size();
    }

    public static class NameViewHolder extends RecyclerView.ViewHolder
    {
        public NameViewHolder(View itemView)
        {
            super(itemView);
        }
    }
}

```

### Initializing

* In `onCreate()` method
``` java
  // Initializing RecyclerView
  initRecyclerView();
```

* `initRecyclerView` method
``` java
 private void initRecyclerView()
    {
        // Initializing Adapeter
        mAdapter = new nameAdapter(this.getContext());
        
        // Initializing RecyclerView
        LinearLayoutManager llm = new LinearLayoutManager(this.getContext());
        llm.setOrientation(LinearLayoutManager.VERTICAL);
        mRecyclerView.setLayoutManager(llm);

        mRecyclerView.setAdapter(mAdapter);
    }
```
---

## Toolbar
The toolbar was formerly known as the action bar. It is now a more customizable view with the same functionalities.

![alt text](https://cms-assets.tutsplus.com/uploads/users/425/posts/24435/image/scrollable-regions-within-android-app.png)

[Link](https://github.com/codepath/android_guides/wiki/Using-the-App-ToolBar)
