class Node {
  constructor(val) {
    // Node value
    this.val = val
    // Pointer to the next node in the list
    this.next = null
  }
}

class SinglyLinkList {
  constructor() {
    // Head of the singly linked list
    this.head = null
    // Tail of the singly linked list
    this.tail = null
    // Length of the singly linked list
    this.length = 0
  }

  // Add item at the end of the singly linked list
  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      // If list is empty, set head and tail to the new node
      this.head = node
      this.tail = node
      this.length++
    } else {
      // Otherwise, add new node to the tail
      this.tail.next = node
      this.tail = node
      this.length++
    }

    return this
  }

  // Remove the item from the end of the singly linked list
  pop() {
    if (this.head === null) {
      // If list is empty, return null
      return null
    } else {
      let temp = this.head
      while (temp.next.next) {
        // Traverse the list to find the second-to-last node
        temp = temp.next
      }
      this.tail = temp
      this.temp = this.tail.next
      this.tail.next = null
      this.length--

      if (this.length === 0) {
        // If list becomes empty, update head and tail
        this.head = null
        this.tail = null
      }

      return temp
    }
  }

  // Remove the item from the beginning of the linked list
  shift() {
    if (this.head === null) {
      // If list is empty, return null
      return null
    } else {
      let temp = this.head
      // Update head to the next node
      this.head = temp.next
      this.length--

      if (this.length === 0) {
        // If list becomes empty, update head and tail
        this.head = null
        this.tail = null
      }
      return temp
    }
  }

  // Add the item at the beginning of the linked list
  unshift(val) {
    const node = new Node(val)
    if (this.head == null) {
      // If list is empty, set head and tail to the new node
      this.head = node
      this.tail = node
      this.length++
      return this
    } else {
      // Otherwise, add new node to the beginning
      node.next = this.head
      this.head = node
      this.length++

      return this
    }
  }

  // Insert item at a particular index in the linked list
  insert(index, val) {
    if (index > this.length) {
      // If index is out of range, return null
      return null
    } else if (index == 0) {
      // If index is 0, call unshift method to add at the beginning
      this.unshift(val)
      return this
    } else if (index == this.length) {
      // If index is at the end, call push method to add at the end
      this.push(val)
      return this
    } else {
      const node = new Node(val)
      let temp = this.head
      let count = 1
      while (count < index) {
        // Traverse the list to find the node at the given index
        temp = temp.next
        count++
      }

      // Insert the new node at the specified index
      node.next = temp.next
      temp.next = node
      this.length++

      return this
    }
  }

  // Remove item at a particular position in the linked list
  remove(index) {
    if (index > this.length) {
      // If index is out of range, return null
      return null
    } else if (index === 0) {
      // If index is 0, call shift method to remove from the beginning
      this.shift()
      return this
    } else if (index == this.length) {
      // If index is at the end, call pop method to remove from the end
      this.pop()
      return this
    } else {
      let temp = this.head
      let count = 1
      while (count < index - 1) {
        // Traverse the list to find the node before the index
        temp = temp.next
        count++
      }

      // Remove the node at the specified index
      temp.next = temp.next.next
      this.length--
      return this
    }
  }

  // Reverse the linked list
  reverse() {
    let current = null
    let newCurrent = null

    while (this.head.next) {
      newCurrent = this.head.next
      this.head.next = current
      current = this.head
      this.head = newCurrent
    }
    this.head.next = current
    return this
  }
}

const singly = new SinglyLinkList()
