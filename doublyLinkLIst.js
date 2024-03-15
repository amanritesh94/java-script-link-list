class Node {
  constructor(val) {
    // Node value
    this.val = val
    // Pointer to the next node
    this.next = null
    // Pointer to the previous node
    this.prev = null
  }
}

class DoublyLinkList {
  constructor() {
    // Head of the doubly linked list
    this.head = null
    // Tail of the doubly linked list
    this.tail = null
    // Length of the doubly linked list
    this.length = 0
  }

  // Add item at the end of the doubly linked list
  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      // If list is empty, set head and tail to the new node
      this.head = node
      this.tail = node
    } else {
      // Otherwise, add new node to the tail
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  // Remove the item from the end of the doubly linked list
  pop() {
    if (this.head === null) {
      // If list is empty, return null
      return null
    } else {
      let temp = this.tail
      this.tail = temp.prev
      this.tail.next = null
      temp.prev = null
      this.length--
      return temp
    }
  }

  // Remove the item from the beginning of the doubly linked list
  shift() {
    if (this.head === null) {
      // If list is empty, return null
      return null
    } else {
      this.head = this.head.next
      this.head.prev = null
      this.length--
      return this
    }
  }

  // Add the item at the beginning of the doubly linked list
  unshift(val) {
    const node = new Node(val)
    if (this.head === null) {
      // If list is empty, set head and tail to the new node
      this.head = node
      this.tail = node
    } else {
      // Otherwise, add new node to the beginning
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.length++
    return this
  }

  // Insert item at a particular index in the doubly linked list
  insert(index, val) {
    if (index > this.length) {
      // If index is out of range, return null
      return null
    } else if (index === 0) {
      // If index is 0, call unshift method to add at the beginning
      this.unshift(val)
    } else if (index === this.length) {
      // If index is at the end, call push method to add at the end
      this.push(val)
    } else {
      const node = new Node(val)
      let prevNode = this.head
      let count = 1
      while (count < index - 1) {
        // Traverse the list to find the node before the index
        prevNode = prevNode.next
        count++
      }
      let nextNode = prevNode.next

      // Insert the new node at the specified index
      prevNode.next = node
      node.prev = prevNode
      node.next = nextNode
      nextNode.prev = node

      this.length++
      return this
    }
  }

  // Remove item at a particular position in the doubly linked list
  remove(index) {
    if (index > this.length) {
      // If index is out of range, return null
      return null
    } else if (index === 0) {
      // If index is 0, call shift method to remove from the beginning
      this.shift()
    } else if (index === this.length) {
      // If index is at the end, call pop method to remove from the end
      this.pop()
    } else {
      let removedNode = this.head
      let count = 1
      while (count < index) {
        // Traverse the list to find the node at the given index
        removedNode = removedNode.next
        count++
      }
      let prevNode = removedNode.prev
      let nextNode = removedNode.next
      prevNode.next = nextNode
      nextNode.prev = prevNode

      // Remove the node at the specified index
      removedNode.next = null
      removedNode.prev = null

      this.length--
      return removedNode
    }
  }
}

const doubly = new DoublyLinkList()
