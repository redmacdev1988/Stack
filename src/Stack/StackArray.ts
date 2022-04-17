import Stack, { AlphaNumeric, STACK_EMPTY_MSG } from './Stack';

const MAX_SIZE: number = 5;
const CLASS_NAME: string = 'StackArray';
let ARRAY_SIZE_FACTOR = 1;

export class StackArray extends Stack <AlphaNumeric> {
    private data;
    private cur;
    private size;

    constructor() {
        super('StackArray', 'Using Array to implement a Stack');
        this.data = new Array<AlphaNumeric>(MAX_SIZE);
        this.cur = 0;
        this.size = MAX_SIZE;
    }

    push (data: AlphaNumeric): void {
        if (this.cur > this.size - 2) {
            this.size = ++ARRAY_SIZE_FACTOR * MAX_SIZE;
            const tmp = new Array<AlphaNumeric>(this.size);
            for (let i = 0; i < this.cur; i++) {
                tmp[i] = this.data[i];
            }
            this.data = tmp;
        }
        this.data[this.cur++] = data;
    }

    pop (): AlphaNumeric | null {
        return (this.cur > 0) ? this.data[--this.cur] : STACK_EMPTY_MSG;
    }

    length (): number {
        return this.cur;
    }

    print(): void {
        for (let i = 0; i < this.cur; i++) {
            const stuff = this.data[i];
            console.log(CLASS_NAME, `index ${i} - ${stuff}`);
        }
    }

}