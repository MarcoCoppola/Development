# Guidelines

1. Naming Convention
  * [Layout files](#layout-files)
  * [ID Resources naming](#id-resources-naming)

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

### ID Resources naming
**Pattern**: `layoutname_component_name`, `component_name`


`Which page` + `Which component` + `What it is for`

| Component  | Prefix     | Example             |
| ---------- | ---------- | ------------------- |
| TextView   | `text_`    | `@+id/text_name`    |
| ImageView  | `image_`   | `@+id/image_user`   |
| Button     | `button_`  | `@+id/button_user`  |
| Menu       | `menu_`    | `@+id/menu_done`    |

