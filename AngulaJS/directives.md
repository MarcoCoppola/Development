#directives

##### Table of Contents
1. [Restrict](#restrict)

---

## Restrict
| Letter | Description |
| ------ | ----------- |
| A | `<div book></div>` |
| C | `<div class="book"></div>` |
| E | `<book data="book_data"></book>` |
| M | `<!--directive:book -->`|

> It is rare that a directive in a real project would be applicable in all four ways. The most common values for the
restrict definition property are A (the directive can be applied only as an attribute), E (the directive can be applied only
as an element), or AE (the directive can be applied as an element or an attribute). As I explain in the following sections,
the C and M options are rarely used.

### Applying the Directive as an Element
``` javascript
<div class="panel-body">
  <unordered-list list-source="products" list-property="price | currency" />
</div>
```

### Applying the Directive as an Attribute
``` javascript
<div class="panel-body">
  <div unordered-list="products" list-property="price | currency"></div>
</div>
```
---
