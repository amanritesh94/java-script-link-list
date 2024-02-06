class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if ((this.head = null)) {
      return null
    } else {
      let temp = this.tail
      this.tail = temp.prev
      this.tail.next = null
      this.length--
      return temp
    }
  }

  shift() {
    if (this.head === null) {
      return null
    } else {
      this.head = this.head.next
      this.head.prev = null
      this.length--
      return this
    }
  }

  unshift(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.length++
    return this
  }

  insert(index, val) {
    if (index > this.length) {
      return null
    } else if (index === 0) {
      this.unshift(val)
    } else if (index === this.length) {
      this.push(val)
    } else {
      const node = new Node(val)
      let prevNode = this.head
      let count = 1
      while (count < index - 1) {
        prevNode = prevNode.next
        count++
      }
      let nextNode = prevNode.next

      prevNode.next = node
      node.prev = prevNode
      node.next = nextNode
      nextNode.prev = node

      this.length++
      return this
    }
  }

  remove(index) {
    if (index > this.length) {
      return null
    } else if (index === 0) {
      this.shift()
    } else if (index === this.length) {
      this.pop()
    } else {
      let removedNode = this.head
      let count = 1
      while (count < index) {
        removedNode = removedNode.next
        count++
      }
      let prevNode = removedNode.prev
      let nextNode = removedNode.next
      prevNode.next = nextNode
      nextNode.prev = prevNode

      removedNode.next = null
      removedNode.prev = null

      this.length--
      return removedNode
    }
  }
}

const doubly = new DoublyLinkList()
