// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node; // assign new head
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
      
    }
    return count;
  }

  getFirst(){
    let node = this.head;
    return node;
  }

  getLast(){

    let node = this.head;

    if (!node) {
        return null;
    }


    while (node) {
        if (!node.next) {
          return node;

        }
  
      node = node.next;
    }

    //return node;

  }

  clear(){
      
  }
}

function testlink() {
  const list = new LinkedList();
  list.insertFirst("1");
  list.insertFirst("2");
  list.insertFirst("3");

  //console.log(list);
  //console.log(list.getFirst());
  console.log(list.getLast());
  //console.log(list.size());
}

testlink();

module.exports = { Node, LinkedList };
