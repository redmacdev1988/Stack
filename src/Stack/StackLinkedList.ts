import Stack, { AlphaNumeric, STACK_EMPTY_MSG } from './Stack';

const MAX_SIZE: number = 20;

class Node <T>{
    public data: T | null ;
    public next: Node<T> | null ;

    constructor(data: T, next: Node <T> | null ) {
        this.data = data;
        this.next = next;
    }
}

export class StackLinkedList extends Stack <AlphaNumeric> {
    private head: Node <AlphaNumeric> | null ;

    constructor() {
        super('LinkedListArray', 'Using Linked List to implement an Array');
        this.head = null;
    }

    push (data: AlphaNumeric): void {
        this.head = new Node<AlphaNumeric>(
            data,
            this.head
        );
    }

    pop (): AlphaNumeric | null {
        if (this.head !== null) {
            const tmp = this.head;
            this.head = this.head?.next!;
            return tmp?.data!;
        }
        return STACK_EMPTY_MSG;
    }

    length (): number {
        if (this.head) {
            let counter: number = 0;
            let tmp: Node<AlphaNumeric> | null = this.head;
            while (tmp !== null) {
                counter++;
                tmp = tmp!.next;
            }
            return counter;
        }
        return 0;
    }

}