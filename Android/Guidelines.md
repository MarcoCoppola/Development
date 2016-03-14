# Guidelines

1. [Naming Convention](#naming-convention)
 * [Layout files](#layout-files)
 * [ID Resources](#id-resources)
 * [Style](#style)
 * [Strings](#strings)

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

### Strings
String names start with a prefix that identifies the section they belong to. For example `registration_email_hint` or `registration_name_hint`. If a string __doesn't belong__ to any section, then you should follow the rules below:


| Prefix             | Description                           |
| -----------------  | --------------------------------------|
| `error_`             | An error message                      |
| `msg_`               | A regular information message         |
| `title_`             | A title, i.e. a dialog title          |
| `action_`            | An action such as "Save" or "Create"  |


## Style

### Typografy
[Link](http://stackoverflow.com/questions/12128331/how-to-change-fontfamily-of-textview-in-android)
