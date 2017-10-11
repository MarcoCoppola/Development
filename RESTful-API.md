# RESTful

**Table of Contents**

1. Backend
   * [Create]()
   * [Read](#read)
    * [Update](#update)
    * [Delete]()
2. Frontend
3. [HTTP Status Codes](#http-status-codes)
    * [2×× Success](#2-success)
    * [4×× Client Error](#4-client-error)


---

## Backend

---

### Read
Method name: 


### Update

---

## Frontend

| Operation | Method | Doc | Log |
| --------- | ------ | --- | --- |
|  *Create* | `foo()` | | |
|  *Read all* | `` | | |
|  *Read single* | `` | | |
|  *Update* | `` | | |
|  *Deleate* | `` | | |

---

## HTTP Status Codes

### 2×× Success
| Code | Info | Note |
| ---- | ---- | ---- |
| 200 | `Ok` | Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation |
| 201 | `Created` | Response to a POST that results in a creation |
| 204 | `No Content` | Response to a successful request that won't be returning a body (like a DELETE request) |


### 4×× Client Error
| Code | Info | Note |
| ---- | ---- | ---- |
| 422 | `Unprocessable Entity` | Used for validation errors |
