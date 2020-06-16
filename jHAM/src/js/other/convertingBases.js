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

// Tests in console
console.log(decimalToBinary(10)); // 1010 - expected
console.log(decimalToBinary(1000)); //  1111101000 - expected
console.log(decimalToBinary(233)); //    11101001 - expected


//  Conversion algorithm for to convert a decimal number to all bases from 2 -> 36

function baseConverter(decimalNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; //    Pop was returning the element as well
    }
    return baseString;
}

//  Internal Testing
console.log(baseConverter(100345,2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345,  35)); // 2BW0
