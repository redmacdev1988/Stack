import Stack, { AlphaNumeric } from './Stack/Stack';
import { StackArray } from './Stack/StackArray';
import { StackLinkedList } from './Stack/StackLinkedList';

console.log('-- Stack --');

function test(imple: Stack<AlphaNumeric>) {
    console.log('using', imple.getName() + ', ' + imple.getDescription());
    imple.push("haha");
    imple.push(123);
    imple.push("thank you!");

    console.log('popped item: ', imple.pop());
    console.log(imple.length());
}

test(new StackLinkedList());
test(new StackArray());