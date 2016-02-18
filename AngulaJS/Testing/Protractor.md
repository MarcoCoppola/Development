# Protractor

1. [Check the number of elements for a specific repeater (ng-repeat)](#check-the-size-of-the-list-of-multiple-elements-ng-repeat)
1. [Where is the asynchronous logic?](#where-is-the-asynchronous-logic)

---

## Check the number of elements for a specific repeater (ng-repeat)

```javascript
var todoListItems = element.all(by.repeater('item in list'));
expect(todoListItems.count()).toBe(3);
```
---

## Where is the asynchronous logic?
In the preceding tests, we saw some magic that you might be questioning. Here are some
of the magic components that we glanced over:
Loading a page before test execution
Assertion on elements that get loaded in promises

### Loading a page before test execution
In the previous test, we used the following code to specify that the browser should point to
the home page:
```javascript
browser.get('/');
```
The preceding command will launch the browser and navigate to the baseUrl location.
Once the browser reaches the page, it will have to load AngularJS and then implement the
AngularJS-specific functions. Our tests don’t have any wait logic, and this is part of the
beauty of Protractor with AngularJS. The waiting for page loading is already built in the
framework for you. Your tests can then be written very cleanly.

### Assertion on elements that get loaded in promises
The assertions and expectations already have promise fulfillment written in them. In the
case of our test, we wrote the assertion so that it expects the count to be three:
expect(todoListItems.count()).toBe(3);
However, in reality, we may have thought that we needed to add asynchronous testing to
the assertion in order to wait for the promise to be fulfilled, something more complicated
like the following:
```javascript
it('', function(done){
var todoListItems = element.all(by.repeater('item in list'));
todoListItems.count().then(function(count){
expect(count).toBe(3);
done();
});
})
```
The preceding code is longer, more granular, and harder to read. Protractor has the ability
for certain elements built in to expectations to make tests more concise.

