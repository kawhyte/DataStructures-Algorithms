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
}

function testlink() {
  const list = new LinkedList();
  list.insertFirst("a");
  list.insertFirst("b");
  list.insertFirst("c");

  //console.log(list);
  //console.log(list.size());
}

testlink();

module.exports = { Node, LinkedList };
