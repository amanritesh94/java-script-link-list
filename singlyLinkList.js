class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  //Add item at the end of singly link list
  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
      this.length++
    } else {
      this.tail.next = node
      this.tail = node
      this.length++
    }

    return this
  }

  // Remove the item from end of singly list
  pop() {
    if (this.head === null) {
      return null
    } else {
      let temp = this.head
      while (temp.next.next) {
        temp = temp.next
      }
      this.tail = temp
      this.temp = this.tail.next
      this.tail.next = null
      this.length--

      if (this.length === 0) {
        this.head = null
        this.tail = null
      }

      return temp
    }
  }

  // Remove the item from the begninig of link list
  shift() {
    if (this.head === null) {
      return null
    } else {
      let temp = this.head
      this.head = temp.next
      this.length--

      if (this.length === 0) {
        this.head = null
        this.tail = null
      }
      return temp
    }
  }

  // Add the item at the begninig of link list
  unshift(val) {
    const node = new Node(val)
    if (this.head == null) {
      this.head = node
      this.tail = node
      this.length++
      return this
    } else {
      node.next = this.head
      this.head = node
      this.length++

      return this
    }
  }

  // Insert item at particulat index in link list
  insert(index, val) {
    if (index > this.length) {
      return null
    } else if (index == 0) {
      this.unshift(val)
      return this
    } else if (index == this.length) {
      this.push(val)
      return this
    } else {
      const node = new Node(val)
      let temp = this.head
      let count = 1
      while (count < index) {
        temp = temp.next
        count++
      }

      node.next = temp.next
      temp.next = node
      this.length++

      return this
    }
  }

  // Remove item at particular position in link list
  remove(index) {
    if (index > this.length) {
      return null
    } else if (index === 0) {
      this.shift()
      return this
    } else if (index == this.length) {
      this.pop()
      return this
    } else {
      let temp = this.head
      let count = 1
      while (count < index - 1) {
        temp = temp.next
        count++
      }

      temp.next = temp.next.next
      this.length++
      return this
    }
  }

  // Reverse link list
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

const singly = new SinglyList()
