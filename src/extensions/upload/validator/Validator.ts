import Notification from './Notification';

export default interface Validator {

    validate(file: File): boolean;

}
