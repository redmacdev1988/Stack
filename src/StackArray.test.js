
import { STACK_EMPTY_MSG } from './Stack/Stack';
import { StackArray } from './Stack/StackArray';

describe("Stack Array Tests", () => {
    const name = "ricky cao";
    const age = 41;
    const dob = 6680;
    const myArray = new StackArray();
    test("Stack Instantiation", () => {
        expect(myArray).toBeDefined();
    });

    test("Push and length of data", () => {
        myArray.push(name);
        expect(myArray.length()).toBe(1);
        myArray.push(dob);
        expect(myArray.length()).toBe(2);
        myArray.push(age);
        expect(myArray.length()).toBe(3);
    });

    test("Popping of Data", () => {
        const result = myArray.pop();
        expect(result).toBe(age);
        const result2 = myArray.pop();
        expect(result2).toBe(dob);
        const result3 = myArray.pop();
        expect(result3).toBe(name);
        expect(myArray.length()).toBe(0);
        const result4 = myArray.pop();
        expect(result4).toBe(STACK_EMPTY_MSG);
    });
});



