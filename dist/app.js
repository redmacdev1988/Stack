"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StackArray_1 = require("./Stack/StackArray");
const StackLinkedList_1 = require("./Stack/StackLinkedList");
console.log('-- Stack --');
function test(imple) {
    console.log('using', imple.getName() + ', ' + imple.getDescription());
    imple.push("haha");
    imple.push(123);
    imple.push("thank you!");
    console.log('popped', imple.pop());
    console.log(imple.length());
}
test(new StackLinkedList_1.StackLinkedList());
test(new StackArray_1.StackArray());
//# sourceMappingURL=app.js.map