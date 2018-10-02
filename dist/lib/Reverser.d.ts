import { DataType } from '..';
import Parser from './Parser';
import { SecureKeyType } from './Secure';
export default class Reverser extends Parser {
    constructor(secureKey?: SecureKeyType);
    reverse(data: DataType): {
        [x: string]: any;
    };
    protected handleReverse(data: {
        [x: string]: any;
    }): {
        [x: string]: any;
    };
    protected getReverseKey(key: string): string;
    protected getReverseValue(value: string): any;
    protected populate(data: DataType): void;
}
