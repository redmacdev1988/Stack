"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STACK_EMPTY_MSG = void 0;
class Stack {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
}
exports.default = Stack;
exports.STACK_EMPTY_MSG = "Stack Empty";
//# sourceMappingURL=Stack.js.map