import Validator from './Validator';

export default class MimeValidator implements Validator {

    public constructor(private mimeTypes: string[]) {}

    public validate(file: File): boolean {
        return this.mimeTypes.includes(file.type);
    }

}
