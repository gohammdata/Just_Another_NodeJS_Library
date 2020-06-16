//  FIFO Data Structure
class Queue {
    constructor() {
        this.count = 0; // Control size of queue
        this.lowestCount - 0; //    Track first element in queue (FIFO)
        this.items = {};
    }

    //  Method to add new elements to end of the queue
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //  Method to dequeue the newest element FIFO using lowestCount
    dequeue() {
        if (this.isEmpty){
            return undefined;
        }
        const result = this.items[this.lowestCount];//  set to result first before delete
        delete this.items[this.lowestCount];//  delete First In
        this.lowestCount++;
        return lowestCount;
    }

    //  Peek method for Queue Object
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    //  isEmpty tightly coupled will return true or false
    isEmpty() {
        return this.size === 0;
    }

    //  size per naming convention
    size() {
        return this.count - this.lowestCount;
    }

    //  Clear the queue using lazy clear
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}