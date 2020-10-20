This repository contains all the data structures and algorithms implemented in Vanilla JavaScript along with references to detailed articles about each one of them

### Linked List:

Linked List is a data structure consisting of series of linked nodes where each node points to the next node in the list. Each node has a value and a pointer to the next node.

Linked list uses **last-in-first-out** method(similar to a Stack) where nodes are added to and deleted from the same end.

**Description**

The entry point to the list is called the Head. The head is a reference to the first node in the linked list. The last node points to a null reference.

**Time Complexity Chart:**

prepend - O(1)
append - O(1)
lookup - O(n)
insert - O(n)
delete - O(n)
traverse - O(n)

**Pros**

Fast Insertion and Deletion

Flexible Size

Ability to grow and shrink

**Cons**

No Reverse Traversal(For Singly Linked List)

It uses more memory than arrays because of the storage of the pointers

Slow Lookup/Slow Search

**Types of Linked list**

1. Singly Linked Lists: Each node contains only one pointer to the next node.

2. Doubly Linked Lists: Each node contains two pointers where one points to the next node and the other points to the previous node.

3. Circular Linked Lists: In this list, the last node points to the first node in the list, therefore making it look like a loop.

**Usecases**

1. Browser History

2. File System

3. Insertion and Deletion is easier and efficient in Linked list than in arrays therefore it can be used in Hashtables during collision

**Resources**

https://visualgo.net/en/list?slide=1

[Data Structures and Algorithms in JS](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js)
