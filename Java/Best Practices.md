# Best Practices

---

### ArrayList VS LinkedList

LinkedList is faster in add and remove, but slower in get. Based on the complexity table and testing results, we can figure out when to use ArrayList or LinkedList. In brief, LinkedList should be preferred if:

* there are no large number of random access of element
* there are a large number of add/remove operations

[Source] (http://www.programcreek.com/2013/03/arraylist-vs-linkedlist-vs-vector/)

---

### Coding to interfaces

Diminuisce l'accoppiamento

Decople the code from a specific implementation of the interface.

List is an Interface
ArraList is an Implementation

Pro: Later you can change the implementation
