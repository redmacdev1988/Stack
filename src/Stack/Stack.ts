
export default abstract class Stack <T> { 
    private name: string;
    private description: string;
    
    constructor (name: string, description: string) {
      this.name = name;
      this.description = description;
    }
   
    public getName (): string {
      return this.name;
    }
   
    public getDescription (): string {
      return this.description;
    }

    abstract push (data: T): void;
    abstract pop (): T | null;
    abstract length (): number;
}

export type AlphaNumeric = string | number;
export const STACK_EMPTY_MSG: string = "Stack Empty";