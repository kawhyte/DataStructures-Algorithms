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

  getFirst() {
    let node = this.head;
    return node;
  }

  getLast() {
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

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    let second = node.next;
    this.head = second;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let previousNode = this.head;

    while (node.next) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }
    let count = 0;

    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);

    if (!previousNode || !previousNode.next) {
      return;
    }

    previousNode.next = previousNode.next.next;
  }


  insertAt(data, index){
    if (!this.head) {
        this.head = new Node(data);
        return;
      }

      if (index === 0) {
        this.head = new Node(data, this.head);
        return;
      }

      const previousNode = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previousNode.next);
      previousNode.next = node;

  }
}

function testlink() {
  const list = new LinkedList();
  list.insertFirst("100");
  list.insertFirst("2");
  list.insertFirst("3");
  //console.log(list.getLast());
  //console.log(list.getAt(0));
  console.log(list.removeAt(1));
  //console.log(list.insertLast("12345"));
  //console.log(list.getFirst());

  //console.log(list.size());
}

testlink();

module.exports = { Node, LinkedList };
