# Guidelines

1. [Naming Convention](#naming-convention)
  - [Layout files](#layout-files)
  - [ID Resources](#id-resources)
  - [Style](#style)

1. [string.xml](#stringxml)
1. Style
  - [Typografy](#typografy)

---

## Naming Convention

### Layout files

| Component        | Pattern                     | Example                       |
| ---------------- | --------------------------- | ----------------------------- |
| Activity         | `activity_<ACTIVITY NAME>`  | `activity_user_profile.xml`   |
| Fragment         | `fragment_<FRAGMENT_NAME>`  | `fragment_sign_up.xml`        |
| Dialog           | `dialog_<DIALOG_NAME>`      | `dialog_change_password.xml`  |
| AdapterView row  | `row_<LIST_NAME>`           | `item_person.xml`             |

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

### Style
Style names are written  in `UpperCamelCase`.

---
## string.xml
Name your strings with keys that resemble namespaces, and don't be afraid of repeating a value for two or more keys. Languages are complex, so namespaces are necessary to bring context and break ambiguity.

**Bad**
```xml
<string name="network_error">Network error</string>
<string name="call_failed">Call failed</string>
<string name="map_failed">Map loading failed</string>
```

**Good**
```xml
<string name="error.message.network">Network error</string>
<string name="error.message.call">Call failed</string>
<string name="error.message.map">Map loading failed</string>
```

Don't write string values in all uppercase. Stick to normal text conventions (e.g., capitalize first character). If you need to display the string in all caps, then do that using for instance the attribute [`textAllCaps`](http://developer.android.com/reference/android/widget/TextView.html#attr_android:textAllCaps) on a TextView.

**Bad**
```xml
<string name="error.message.call">CALL FAILED</string>
```

**Good**
```xml
<string name="error.message.call">Call failed</string>
```
---

## Style

### Typografy
[Link](http://stackoverflow.com/questions/12128331/how-to-change-fontfamily-of-textview-in-android)
