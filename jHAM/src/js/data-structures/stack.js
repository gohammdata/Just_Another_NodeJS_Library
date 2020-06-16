//  JS Object-Oriented-Based Class for Stack
class Stack {
    /* 
    items = {
         0: 5,
         1: 8
    };
    count = 2;
    */
    constructor() {
        this.count = 0;
        this.items = {};
    }
    //  Object-Based Push Method for Stack
    push(element) {
        this.items[this.count] = element;
        this.count++; //    Object-Based so push one at a time
    }

    //  Size Method is in line with count
    size(){
        return this.count;
    }

    //  isEmpty Method in line with count
    isEmpty() {
        return this.count === 0;
    }

    // pop method that checks if stack object is empty then removes via LIFO and returns what was removed
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    //  peek method checks if stack is empty and if not returns the last added element to the stack
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count-1];
    }

    //  clear method respecting the LIFO
    clear() {
        //  this.items = {};
        //  this.count = 0;
        while (!this.isEmpty()){
            this.pop();
        }
    }

}
