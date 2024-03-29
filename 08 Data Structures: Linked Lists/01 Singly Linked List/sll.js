// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(pos, value) {
    if (pos >= this.length) {
      return this.append(value);
    }
    else if (pos === 0) {
      return this.prepend(value); 
    }
    else {
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(pos - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
    }
    this.length++;
    this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index){
    if(index === 0){
      this.head = this.head.next;
    }
    else{
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }
    this.length--;
    return this.printList();
  }
};

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,45);
var arr = myLinkedList.printList();
arr = myLinkedList.remove(3);
console.log(arr);
