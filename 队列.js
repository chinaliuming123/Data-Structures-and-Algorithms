function Queue() {
  let items = []
  this.enqueue = function (element) {
    items.push(element)
  }
  this.dequeue = function () {
    return items.shift()
  }
  this.front = function () {
    return items[0]
  }
  this.isEmpty = function () {
    return items.length === 0
  }
  this.size = function () {
    return items.length
  }
  this.print = function () {
    console.log(...items)
  }
  this.clear = function () {
    items = []
  }
}
let queue = new Queue()

function PriorityQueue() {
  let items = []
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.isEmpty = function () {
    return items.length === 0
  }
  this.print = function () {
    console.log(...items)
  }
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)
    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        items.push(queueElement)
      }
    }
  }
}
let priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('hello', 1)
// priorityQueue.enqueue('world', 2)
// priorityQueue.print()

// 击鼓传花

function hotPotato(nameList, num) {
  let queue = new Queue()
  for (let i = 1; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(eliminated + '被淘汰')
  }
  return queue.dequeue()
}
var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('胜利者' + winner);