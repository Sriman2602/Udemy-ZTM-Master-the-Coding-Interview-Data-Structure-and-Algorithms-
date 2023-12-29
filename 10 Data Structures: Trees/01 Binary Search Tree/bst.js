class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    }
    else{
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          } 
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  inorderTraversal(root) {
    if (root) {
      this.inorderTraversal(root.left);
      console.log(root.value); 
      this.inorderTraversal(root.right);
    }
  }
  lookup(value) {
    if(!this.root){
      return false;
    }
    else {
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if(value === currentNode.value){
          return currentNode;
        }
      }
    }
    return false;
  }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if (parentNode === null) {
              this.root = currentNode.right;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          } else {
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while (leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
            if (parentNode === null) {
              this.root = leftmost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
          return true;
        }
      }
    }
  }
}

const myBST = new BST();
myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);
//console.log(myBST);
console.log(myBST.lookup(2));
