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
exports.StackArray = void 0;
const Stack_1 = __importStar(require("./Stack"));
const MAX_SIZE = 5;
const CLASS_NAME = 'StackArray';
let ARRAY_SIZE_FACTOR = 1;
class StackArray extends Stack_1.default {
    constructor() {
        super('StackArray', 'Using Array to build a Stack');
        this.data = new Array(MAX_SIZE);
        this.cur = 0;
        this.size = MAX_SIZE;
    }
    push(data) {
        if (this.cur > this.size - 2) {
            this.size = ++ARRAY_SIZE_FACTOR * MAX_SIZE;
            const tmp = new Array(this.size);
            for (let i = 0; i < this.cur; i++) {
                tmp[i] = this.data[i];
            }
            this.data = tmp;
        }
        this.data[this.cur++] = data;
    }
    pop() {
        return (this.cur > 0) ? this.data[--this.cur] : Stack_1.STACK_EMPTY_MSG;
    }
    length() {
        return this.cur;
    }
    print() {
        for (let i = 0; i < this.cur; i++) {
            const stuff = this.data[i];
            console.log(CLASS_NAME, `index ${i} - ${stuff}`);
        }
    }
}
exports.StackArray = StackArray;
//# sourceMappingURL=StackArray.js.map