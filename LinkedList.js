// Implementation of Singly Linked List

// Implementing a List Node

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Implementing a Linked List

class LinkedList {
  // While initializing a linkedlist, both head and tail points to the same node
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // Check if the list is empty
  isEmpty() {
    return this.length === 0;
  }
  // Empties the list
  clear() {
    this.head = null;
  }

  // Traverse through the list and prints the result
  traverse() {
    let arr = [],
      current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  // Traverses to the given index and returns the respective node in that index
  traverseToIndex(index) {
    let counter = 0,
      current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Adds node to the head of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  // Adds node to the tail of the list
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  // Inserts node to the given index in the list
  insert(index, value) {
    if (index < 0 || index > this.length - 1 || this.isEmpty())
      return "Operation cannot be performed";
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let prev = this.traverseToIndex(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
    this.traverse();
  }

  // Deletes a node from the given index in the list
  delete(index) {
    if (index < 0 || index > this.length - 1 || this.isEmpty())
      return "Cannot perform the delete operation";
    let nodeToBeRemoved;
    if (index === 0) {
      nodeToBeRemoved = this.head;
      this.head = this.head.next;
    } else if (index == this.length - 1) {
      let current = this.traverseToIndex(index - 1);
      nodeToBeRemoved = current.next;
      current.next = null;
      this.tail = current;
    } else {
      let counter = 0,
        prev = this.head;
      while (counter !== index - 1) {
        prev = prev.next;
        counter++;
      }
      nodeToBeRemoved = prev.next;
      prev.next = nodeToBeRemoved.next;
    }
    this.length--;
    return nodeToBeRemoved;
  }
  // Returns the index of the value that's been searched
  find(value) {
    let counter = 0,
      current = this.head;
    if (this.isEmpty()) return "List is Empty";
    while (current !== null && current.value !== value) {
      counter++;
      current = current.next;
    }
    if (current) return counter;
    else return "Item not found";
  }
  // Gets the value from the specified index in the list
  get(index) {
    let current = this.traverseToIndex(index);
    return current.value;
  }
  // Reverses the entire list
  reverse() {
    let first = null,
      tail = this.head,
      second = this.head,
      third = null;
    while (second !== null) {
      third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head = first;
    this.tail = tail;
    this.traverse();
  }
}
