# Style Guidelines

**Table of Contents**

1. [Naming](#naming)
   * [Layout files](#layout-files)
   * [Drawable files](#drawables)
   * [Menu files](#menu-files)
   * [ID Resources](#id-resources)
   * [Constants](#constants)
   * [Style](#style)
   * [Strings](#strings)

1. [Typografy](#typografy)

---

## Naming

### Layout files
**Pattern:** `<WHAT>_<WHERE>.xml`

| Component        | Pattern                     | Example                       |
| ---------------- | --------------------------- | ----------------------------- |
| Activity         | `activity_<ACTIVITY NAME>`  | `activity_user_profile.xml`   |
| Fragment         | `fragment_<FRAGMENT_NAME>`  | `fragment_sign_up.xml`        |
| Dialog           | `dialog_<DIALOG_NAME>`      | `dialog_change_password.xml`  |
| AdapterView row  | `item_<LIST_NAME>`          | `item_person.xml`             |

---

### Drawables
**Pattern:** `<WHERE>_<DESCRIPTION>.xml`

Naming conventions for drawables:


| Asset Type   | Prefix            |		Example               |
|--------------| ------------------|-----------------------------|
| Action bar   | `ab_`             | `ab_stacked.9.png`          |
| Button       | `btn_`	            | `btn_send_pressed.9.png`    |
| Dialog       | `dialog_`         | `dialog_top.9.png`          |
| Divider      | `divider_`        | `divider_horizontal.9.png`  |
| Icon         | `ic_`	            | `ic_star.png`               |
| Menu         | `menu_	`           | `menu_submenu_bg.9.png`     |
| Notification | `notification_`	| `notification_bg.9.png`     |
| Tabs         | `tab_`            | `tab_pressed.9.png`         |

Naming conventions for icons (taken from [Android iconography guidelines](http://developer.android.com/design/style/iconography.html)):

| Asset Type                      | Prefix             | Example                      |
| --------------------------------| ----------------   | ---------------------------- |
| Icons                           | `ic_`              | `ic_star.png`                |
| Launcher icons                  | `ic_launcher`      | `ic_launcher_calendar.png`   |
| Menu icons and Action Bar icons | `ic_menu`          | `ic_menu_archive.png`        |
| Status bar icons                | `ic_stat_notify`   | `ic_stat_notify_msg.png`     |
| Tab icons                       | `ic_tab`           | `ic_tab_recent.png`          |
| Dialog icons                    | `ic_dialog`        | `ic_dialog_info.png`         |

Naming conventions for selector states:

| State	       | Suffix          | Example                     |
|--------------|-----------------|-----------------------------|
| Normal       | `_normal`       | `btn_order_normal.9.png`    |
| Pressed      | `_pressed`      | `btn_order_pressed.9.png`   |
| Focused      | `_focused`      | `btn_order_focused.9.png`   |
| Disabled     | `_disabled`     | `btn_order_disabled.9.png`  |
| Selected     | `_selected`     | `btn_order_selected.9.png`  |

---

### Menu files

Similar to layout files, menu files should match the name of the component. For example, if we are defining a menu file that is going to be used in the `UserActivity`, then the name of the file should be `activity_user.xml`

A good practice is to not include the word `menu` as part of the name because these files are already located in the `menu` directory.

---

### ID Resources

**Pattern:** `<WHAT>_<WHERE>_<DESCRIPTION>`

| Example    | Description |
| ---------- | ----------- |
| `tablayout_main`   | TabLayout in MainActivity    |
| `image_menu_profile`   | profile image in custom MenuView   |
| `text_articledetail_title`  | title TextView in ArticleDetailFragment  |    

---
### Constants

Many elements of the Android SDK such as `SharedPreferences`, `Bundle`, or `Intent` use a key-value pair approach so it's very likely that even for a small app you end up having to write a lot of String constants.

When using one of these components, you __must__ define the keys as a `static final` fields and they should be prefixed as indicated below.

| Element            | Field Name Prefix |
| -----------------  | ----------------- |
| SharedPreferences  | `PREF_`             |
| Bundle             | `BUNDLE_`           |
| Fragment Arguments | `ARGUMENT_`         |
| Intent Extra       | `EXTRA_`            |
| Intent Action      | `ACTION_`           |

Note that the arguments of a Fragment - `Fragment.getArguments()` - are also a Bundle. However, because this is a quite common use of Bundles, we define a different prefix for them.

Example:

```java
// Note the value of the field is the same as the name to avoid duplication issues
static final String PREF_EMAIL = "PREF_EMAIL";
static final String BUNDLE_AGE = "BUNDLE_AGE";
static final String ARGUMENT_USER_ID = "ARGUMENT_USER_ID";

// Intent-related items use full package name as value
static final String EXTRA_SURNAME = "com.myapp.extras.EXTRA_SURNAME";
static final String ACTION_OPEN_USER = "com.myapp.action.ACTION_OPEN_USER";
```


---
### Style
Style names are written  in `UpperCamelCase`.

**Pattern**: `Category`, `Component`,`SubComponent`

Theme.CardView.Title

Theme.CardView.SubTitle

Theme.CardView.Card


#### TextApparance
`TextAppearance.List.TwoLine.SecondaryText`

La prima voce è TextAppearance perchè è un attributo e non uno style.
Poi si applica un'approccio Top-Down


#### Dimen
Example from google:

```xml
android:padding=”@dimen/photos_mediadetails_item_padding” 
android:minHeight=”@dimen/photos_mediadetails_item_min_height”
```


---

### Strings
**Pattern:** `<WHERE>_<WHAT>_<DESCRIPTION>`

By Google:

```xml
<string name=”photos_mediadetails_details_edit_datetime_icon_content_description”>Edit icon to allow the user to edit the date/time of the media.</string>

<string name="assistant_t_google_preference_title">...</string>
<string name="assistant_t_google_preference_summary">...</string>
<string name="assistant_t_google_support_alert_message">...</string>
<string name="assistant_t_google_alert_positive_label">...</string>
<string name="assistant_t_google_alert_negative_label">...</string>
```

**OLD**
String names start with a prefix that identifies the section they belong to. 
For example `registration_email_hint` or `registration_name_hint`. 
If a string __doesn't belong__ to any section, then you should follow the rules below:


| Prefix             | Description                           |
| -----------------  | --------------------------------------|
| `error_`             | An error message                      |
| `msg_`               | A regular information message         |
| `title_`             | A title, i.e. a dialog title          |
| `action_`            | An action such as "Save" or "Create"  |




---

### Typografy
[Link](http://stackoverflow.com/questions/12128331/how-to-change-fontfamily-of-textview-in-android)
