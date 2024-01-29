// 선형
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }

//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return value;
//   }

//   peek() {
//     return this.queue[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.dequeue();
// queue.enqueue(8);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue);

// 원형
// class Queue {
//   constructor(maxSize) {
//     this.maxSize = maxSize;
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//     this.size = 0;
//   }

//   enqueue(value) {
//     if (this.isFull()) {
//       console.log("Queue is Full");
//       return;
//     }
//     this.queue[this.rear] = value;
//     this.rear = (this.rear + 1) % this.maxSize;
//     this.size += 1;
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front = (this.front + 1) % this.maxSize;
//     this.size -= 1;
//     return value;
//   }

//   isFull() {
//     return this.size === this.maxSize;
//   }

//   peek() {
//     return this.queue(this.front);
//   }
// }

// const queue = new Queue(4);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8); // Queue { maxSize: 4, queue: [ 1, 2, 4, 8 ], front: 0, rear: 0, size: 4 }
// queue.enqueue(8); // Queue is Full
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(16);
// queue.enqueue(32);
// console.log(queue);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
  return count;
}
