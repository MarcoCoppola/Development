#Style Guidelines

**Table of Contents**

1. [Naming](#naming)
 * [Layout files](#layout-files)
 * [Drawable files](https://github.com/ribot/android-guidelines/blob/master/project_and_code_guidelines.md#1221-drawable-files)
 * [Menu files](#menu-files)
 * [ID Resources](#id-resources)
 * [Constants](#constants)
 * [Style](#style)
 * [Strings](#strings)

1. Style
  - [Typografy](#typografy)

---

## Naming

### Layout files

| Component        | Pattern                     | Example                       |
| ---------------- | --------------------------- | ----------------------------- |
| Activity         | `activity_<ACTIVITY NAME>`  | `activity_user_profile.xml`   |
| Fragment         | `fragment_<FRAGMENT_NAME>`  | `fragment_sign_up.xml`        |
| Dialog           | `dialog_<DIALOG_NAME>`      | `dialog_change_password.xml`  |
| AdapterView row  | `row_<LIST_NAME>`           | `item_person.xml`             |

---
### Menu files

Similar to layout files, menu files should match the name of the component. For example, if we are defining a menu file that is going to be used in the `UserActivity`, then the name of the file should be `activity_user.xml`

A good practice is to not include the word `menu` as part of the name because these files are already located in the `menu` directory.

---

### ID Resources
**Pattern**: `layoutname_component_name`, `component_name`


`Which page` + `Which component` + `What it is for`

| Component  | Prefix     | Example             |
| ---------- | ---------- | ------------------- |
| TextView   | `text_`    | `@+id/text_name`    |
| ImageView  | `image_`   | `@+id/image_user`   |
| Button     | `button_`  | `@+id/button_user`  |
| Menu       | `menu_`    | `@+id/menu_done`    |

| Examples               |
| ---------------------- |
| login_button_submit    |
| login_text_forgot_pass |


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

---

### Strings
String names start with a prefix that identifies the section they belong to. For example `registration_email_hint` or `registration_name_hint`. If a string __doesn't belong__ to any section, then you should follow the rules below:


| Prefix             | Description                           |
| -----------------  | --------------------------------------|
| `error_`             | An error message                      |
| `msg_`               | A regular information message         |
| `title_`             | A title, i.e. a dialog title          |
| `action_`            | An action such as "Save" or "Create"  |

---

## Style

### Typografy
[Link](http://stackoverflow.com/questions/12128331/how-to-change-fontfamily-of-textview-in-android)
