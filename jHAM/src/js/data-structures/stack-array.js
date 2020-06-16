//  Data Structure to store the elements of a stack
class Stack {
    constructor() {
        this.items = []; // {1}
    }

    //  Method to add element to top of the stack
    push(element) {
        this.items.push(element); // push from JavaScript Array class
    }

    //  Remove last item from the Stack (LIFO)
    pop() {
       return this.items.pop(); //  pop from JavaScript Array class
    }

    //  Show the last element added to the stack
    peek() {
        return this.items[this.items.length - 1]; //    Last element is at position (length-1)
    }
}