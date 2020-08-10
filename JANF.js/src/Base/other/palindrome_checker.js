import { Deque } from '../data-structures/queue_deque/deque';

function palindromeChecker (aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) { // Verify if the String is valid before the algorithm logic
            return false;
        }
        const deque = new Deque();
        const lowerString = aString.toLocaleLowerCase().split(' ').join('');
        let isEqual = true;
        let firstChar, lastChar;

        for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
        }

        while (deque.size() > 1 && isEqual) {
            firstChar = deque.removeFront();
            lastChar = deque.removeBack();
            if (firstChar !== lastChar) {
                isEqual = false;
            }
        }
        
        return isEqual;
    }

    console.log('a', palindromeChecker('a')); //    Truu
    console.log('aa', palindromeChecker('aa')); //  Truest
    console.log('Was it a car or a car I saw', palindromeChecker('Was it a car or a car I saw')); //    True!
    console.log('This is not a palindrome', palindromeChecker('This is not a palindrome')); //  False as they come