//  JS Object-Oriented-Based Class for Stack
class Stack {
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
}
