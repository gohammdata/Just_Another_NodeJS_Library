// Class for a Double ended Queue Data Structure
// Use this for undo operations and similar
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    
    //  Add an element to the Front of the Object
    addFront(element) {
        if(this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    //  Same as enqueue
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //  Same as dequeue
    removeFront() {
        if (this.isEmpty) {
            return undefined;
        }
        const result = this.items[this.lowestCount];//  set to result first before delete
        delete this.items[this.lowestCount];//  delete First In
        this.lowestCount++;
        return lowestCount;
    }

    //  Remove Back
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    //  Peek Front
    peekFront() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    //  Peek Back
    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }

    // isEmpty to return true or false
    isEmpty() {
        return this.size === 0;
    }

    //  size per naming convention
    size() {
        return this.count - this.lowestCount;
    }
    //  Clear method
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // toString method to make the values of the Deque Object a string
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
