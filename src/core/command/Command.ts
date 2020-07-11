export default interface Command<T> {

    execute(context: T): void;

}
