#Naming Guidelines

## Table of Contents

  1. [Singular or Plural](#singular-or-plural)
  1. [Listeners, callbacks, events](#listeners-callbacks-events)
  1. [Show/hide]()
  

---
## Singular or Plural?

| Type | Singular or plural | Example | Details |
| --------- | ---- | ------- | ------- |
| Model | Singular | User | |
| Controller | Plural | UsersController | Se il controller si riferisce ad un Model |

---

## Listeners, callbacks, events
### Listeners
* **Method**: `registerFooListener()`
* **Descriptions**: Registers a listener for foo event.
* OnClickListener
* Ascoltatore sul onClick
* Interface definition for a callback to be invoked when a view is clicked.
* Called when a view has been clicked.


### Callbacks
``` java
public interface ConnectionCallbacks {
        int CAUSE_SERVICE_DISCONNECTED = 1;
        int CAUSE_NETWORK_LOST = 2;

        void onConnected(int var1);

        void onConnectionSuspended(int var1);
    }
```


---

### Show/hide
#### VARIABLE

#### METHODS
* **showProgressDialog()**

  | Param | Type | Details |
  | --------- | ---- | ------- |
  | `-` | `-` | `-` |


  | Return |
  | ------ |
  |-|

* **setVisible(boolean visible)**

  | Param | Type | Details |
  | --------- | ---- | ------- |
  | `visible` | `boolean` | `If true then the item will be visible; if false it is hidden.` |


  | Return |
  | ------ |
  |-|
  
---

##### Save
* Save the booking to the database. 

#### Events
* onArticleSelected() = Fai qualcosa una volta selezionato un articolo.

#### Enable / Disable
* **variable**: `popupEnabled = true`;

##### Method
* **name**: `setDebugEnabled(flag)`
* **parameters**:

  | Parameter | Type | Default | Description |
  | --------- | ---- | ------- | ----------- |
  | `flag (optional)` | `boolean` | `true` | Enable or disable debug level messages. |

* **returns**: current value if used as getter or itself (chaining) if used as setter

--- 

## Auth
* Login successful!
