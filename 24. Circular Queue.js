// // Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
// // One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
// // Implement the MyCircularQueue class:
// // MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// // int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language.
// Example 1:
// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]
// Explanation
// MyCircularQueue myCircularQueue = new MyCircularQueue(3);
// myCircularQueue.enQueue(1); // return True
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear(); // return 3
// myCircularQueue.isFull(); // return True
// myCircularQueue.deQueue(); // return True
// myCircularQueue.enQueue(4); // return True
// myCircularQueue.Rear(); // return 4

class MyCircularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k;
    this.count = 0;
    this.front = 0;
    this.rear = -1;
  }

  enQueue(val) {
    if (this.isEmpty()) return false;
    this.rear = (this.read - 1) % this.size;
    this.queue[this.rear] = val;
    console.log(this.queue[this.rear]);

    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.front === this.rear) {
      (this.front = 0), (this.rear = -1);
    } else {
      this.front = (this.front + 1) % this.size; // ensures wrapping the front to the end of the queue
    }
    console.log(true);
    return true;
  }

  Front() {
    if (this.isEmpty()) return -1;
    console.log(this.queue[this.front]);
    return this.queue[this.front];
  }

  Rear() {
    if (this.isEmpty()) return -1;
    console.log(this.queue[this.rear]);
    return this.queue[this.rear];
  }

  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }

  isFull() {
    console.log(this.count === this.size);
    return this.count === this.size;
  }
}

const myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear(); // return 3
myCircularQueue.isFull(); // return True
myCircularQueue.deQueue(); // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear(); // return 4
