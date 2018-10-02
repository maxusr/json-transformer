import { DataType } from '..';
import Parser from './Parser';
import { SecureKeyType } from './Secure';

export default class Reverser extends Parser {

    constructor(secureKey?: SecureKeyType) {
        super(secureKey);
    }

    public reverse(data: DataType): { [x: string]: any } {
        this.data = data;
        this.populateConfiguration();
        if(this.isRegular()) {
            this.populate(data);
            return this.handleReverse(data[Parser.fields.data]);
        }
        return data;
    }

    protected handleReverse(data: { [x: string ]: any }): { [x: string ]: any } {
        const reversed: { [x: string]: any} = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                if(Array.isArray(element)) {
                    reversed[this.getReverseKey(key)] = element.map(value => this.handleReverse(value));
                }else if(typeof element === 'object') {
                    reversed[this.getReverseKey(key)] = this.handleReverse(element);
                } else {
                    reversed[this.getReverseKey(key)] = this.getReverseValue(element);
                }
            }
        }
        return reversed;
    }

    protected getReverseKey(key: string): string {
        return this.keys[key];
    }

    protected getReverseValue(value: string): any {
        let decryptValue = this.values[value];
        if(typeof decryptValue === 'string' && !!this.secure && this.configuration.getSecure()) decryptValue = this.secure.decrypt(decryptValue);
        return decryptValue;
    }

    protected populate(data: DataType) {
        this.keys = data[Parser.fields.keys];
        this.values = data[Parser.fields.values];
    }
}