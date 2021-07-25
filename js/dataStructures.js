// Priority queue element
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class 
class PriorityQueue {

    // An array is used to implement priority 
    constructor() {
        this.items = [];
    }

    // enqueue function to add element to the queue as per priority 
    enqueue(element, priority) {
        // creating object from queue element 
        let qElement = new QElement(element, priority);
        let contain = false;

        // iterating through the entire item array to add element at the correct location of the Queue 
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is enqueued 
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        // if the element have the highest priority it is added at the end of the queue 
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue method to remove element from the queue   
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // isEmpty method to check if the queue is empty
    isEmpty () {
        return this.items.length === 0;
    }

    // size method to get the size of the queue
    size() {
        return this.items.length;
    }
}

class Node {
    constructor(char, freq, left, right) {
        this.char = char;
        this.freq = freq;
        this.right = right || null;
        this.left = left || null;
    }
}

export {PriorityQueue, Node}
// module.exports = PriorityQueue;