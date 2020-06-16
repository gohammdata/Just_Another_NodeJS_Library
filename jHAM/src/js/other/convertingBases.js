import { Stack } from '../data-structures/stack';


// Applying the Object Based Stack Data Structure I just Built
//  via decimalToBinary conversion of the Stack.
function decimalToBinary(decimalNumber) {
    const remStack = new Stack();
    let number = decimalNumber;
    let rem; //remainder
    let binaryString = '';

    while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}