function LinkedList() {
  let Node = function (element) {
    this.element = element
    this.next = null
  }
  let length = 0
  let head = null
  // 向链表尾部追加元素
  this.append = function (element) {
    let node = new Node(element)
    let current
    if (head === null) { head = node }
    else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.head = node
    }
    length++
  }
  // 在任意位置插入一个元素
  this.insert = function (position, element) {
    if (positon > 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0
      if (positon === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < positon) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }
  // 从链表中移除元素
  this.remove = function (position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < positon) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }
  this.indexOf = function (element) {
    let current = head,
      index = -1
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++
      current = current.next
    }
    return -1
  }
  this.removeAt = function (position) { }
  this.isEmpty = function () { }
  this.size = function () { }
  this.toString = function () {
    let current = head,
      string = ''
    while (current) {
      string = current.element
      current = current.next
    }
    return string
  }
}