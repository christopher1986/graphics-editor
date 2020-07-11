import Command from './Command';
import CommandExecutor from './CommandExecutor';

export default class SimpleCommandExecutor<T> implements CommandExecutor<T> {

    public execute(command: Command<T>): void {
    }

}
