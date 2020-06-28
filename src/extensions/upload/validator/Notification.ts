export default class Notification {

    private errors: string[] = [];

    public addError(error: string): void {
        this.errors.push(error);
    }

    public getErrors(): string[] {
        return [ ...this.errors ];
    }

    public isEmpty(): boolean {
        return this.errors.length === 0;
    }

}
