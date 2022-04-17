"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackLinkedList = void 0;
const Stack_1 = __importStar(require("./Stack"));
const MAX_SIZE = 20;
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class StackLinkedList extends Stack_1.default {
    constructor() {
        super('LinkedListArray', 'Using Linked List to implement an Array');
        this.head = null;
    }
    push(data) {
        this.head = new Node(data, this.head);
    }
    pop() {
        var _a;
        if (this.head !== null) {
            const tmp = this.head;
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next;
            return tmp === null || tmp === void 0 ? void 0 : tmp.data;
        }
        return Stack_1.STACK_EMPTY_MSG;
    }
    length() {
        if (this.head) {
            let counter = 0;
            let tmp = this.head;
            while (tmp !== null) {
                counter++;
                tmp = tmp.next;
            }
            return counter;
        }
        return 0;
    }
}
exports.StackLinkedList = StackLinkedList;
//# sourceMappingURL=StackLinkedList.js.map