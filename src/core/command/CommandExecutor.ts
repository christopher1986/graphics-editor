import Command from './Command';

export default interface CommandExecutor<T> {

    execute(command: Command<T>): void;

}
