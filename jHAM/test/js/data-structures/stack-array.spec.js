//  Ordered collection of items following LIFO
const stack = new Stack();
//  Verify creation
console.log(stack.isEmpty()); //    Expected output true
stack.push(5); //   Test push method
stack.push(8); //   Stacking via push
console.log(stack.peek()); //   Expected output of 8
stack.push(11);
console.log(stack.size()); //   Expected output of 3
console.log(stack.isEmpty());// Expected output of fasle
stack.push(15);
stack.pop();
stack.pop(); // Removes 15 and 11
console.log(stack.size()); //   Expected output of 2
