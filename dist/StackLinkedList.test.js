"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack/Stack");
const StackLinkedList_1 = require("./Stack/StackLinkedList");
describe("Stack Linked List Tests", () => {
    const name = "ricky cao";
    const age = 41;
    const dob = 6680;
    const myLinkedList = new StackLinkedList_1.StackLinkedList();
    test("Stack Instantiation", () => {
        expect(myLinkedList).toBeDefined();
    });
    test("Push and length of data", () => {
        myLinkedList.push(name);
        expect(myLinkedList.length()).toBe(1);
        myLinkedList.push(dob);
        expect(myLinkedList.length()).toBe(2);
        myLinkedList.push(age);
        expect(myLinkedList.length()).toBe(3);
    });
    test("Popping of Data", () => {
        const result = myLinkedList.pop();
        expect(result).toBe(age);
        const result2 = myLinkedList.pop();
        expect(result2).toBe(dob);
        const result3 = myLinkedList.pop();
        expect(result3).toBe(name);
        expect(myLinkedList.length()).toBe(0);
        const result4 = myLinkedList.pop();
        expect(result4).toBe(Stack_1.STACK_EMPTY_MSG);
    });
});
//# sourceMappingURL=StackLinkedList.test.js.map