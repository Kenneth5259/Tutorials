// mapping boolean constanst for readability
const INCOMPLETE: boolean = false;
const COMPLETE: boolean = true;

export class Todo {
    constructor(private title: string, private status: boolean = INCOMPLETE) {}

    getTitle(): string {
        return this.title;
    }

    getStatus(): boolean {
        return this.status;
    }
    markComplete(): void {
        this.status = COMPLETE;
    }
}