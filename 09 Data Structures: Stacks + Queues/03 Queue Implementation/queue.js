class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;  
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
  printQueue(){
    let currentNode = this.front;
    const var_arr = []
    while(currentNode){
      var_arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return var_arr;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());
