'use strict';
/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Stacks

class Stack {
  constructor () {
    this.stack = [];
    this.head = this.tail = 0;
  }

  add (item) {
    this.stack[this.tail++] = item;
    return this;
  }

  remove () {
    if (this.head === this.tail) return;
    return this.stack[--this.tail];
  }
}

//-----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.


class Queue {
  constructor () {
    this.queue = [];
    this.head = this.tail = 0;
  }

  add (item) {
    this.queue[this.tail++] = item;
    return this;
  }

  remove () {
    if (this.head === this.tail) return;
    return this.queue[this.head++];
  }
}

//-----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

class LinkedList {
  constructor () {
    this.head = this.tail = null;
  }

  addToTail (item) {
    let newTailNode = new ListNode(item, this.tail, null);
    if (this.tail) this.tail.next = newTailNode;
    else this.head = newTailNode;
    this.tail = newTailNode;
    return this;
  }

  removeFromTail () {
    if (!this.tail) return;
    const removedTail = this.tail;
    this.tail = removedTail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return removedTail.item;
  }

  forEach (iterator) {
    let currentNode = this.head;
    while (currentNode) {
      iterator(currentNode.item);
      currentNode = currentNode.next;
    }
  }
}

class ListNode {
  constructor (item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

//-----------------------------------------
// Association lists

class Alist {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  set(key, value) {
    let formerHead = (this.head) ? this.head : null;
    this.head = new AlistNode(key, value, formerHead);
    return this; // for chaining; do not edit
  }

  get(key) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
  }
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

//-----------------------------------------
// Hash tables

function hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

class HashTable {
  constructor() {
    this.buckets = Array(20);
    for (var i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Alist;
    }
  }

  set(key, value) {
    let hashVal = hash(key);
    this.buckets[hashVal].set(key, value);
    return this; // for chaining, do not edit
  }

  get(key) {
    return this.buckets[hash(key)].get(key);
  }
}

//-----------------------------------------
// Binary search trees

class BinarySearchTree {
  constructor(val) {
    this.value = val;
  }

  insert(val) {
    var direction = val < this.value ? 'left' : 'right';
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BinarySearchTree(val);
    return this; // for chaining, do not edit
  }

  min() {
    return (this.left) ? this.left.min() :  this.value;
  }

  max() {
    return (this.right) ? this.right.max() : this.value;
  }

  contains(val) {
    if (this.value === val) {
      return true;
    } else if (val < this.value && this.left) {
      return this.left.contains(val);
    }else if (val > this.value && this.right) {
      return this.right.contains(val);
    }
    return false;
  }

  traverse(iterator) {
    if (this.left) this.left.traverse(iterator);
    iterator(this.value);
    if (this.right) this.right.traverse(iterator);
  }
}
