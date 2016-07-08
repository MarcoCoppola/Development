# RESTful

Table of Contents

1. FAQ
    * Should the endpoint name be singular or plural?  
    * What about actions that don't fit into the world of CRUD operations?
1. [Create](#create)
2. [Read](#read)
3. [Update](#update)
4. [Delete](#delete)

---
## FAQ

### Should the endpoint name be singular or plural?
Plural

### What about actions that don't fit into the world of CRUD operations?
This is where things can get fuzzy. There are a number of approaches:

* Restructure the action to appear like a field of a resource. This works if the action doesn't take parameters. For example an activate action could be mapped to a boolean activated field and updated via a PATCH to the resource.

* Treat it like a sub-resource with RESTful principles. For example, GitHub's API lets you star a gist with PUT /gists/:id/star and unstar with DELETE /gists/:id/star.

* Sometimes you really have no way to map the action to a sensible RESTful structure. For example, a multi-resource search doesn't really make sense to be applied to a specific resource's endpoint. In this case, /search would make the most sense even though it isn't a resource. This is OK - just do what's right from the perspective of the API consumer and make sure it's documented clearly to avoid confusion.



## Create

### Log

* Creating a new `MODEL`...

---

## Read

---

## Update

---

## Delete