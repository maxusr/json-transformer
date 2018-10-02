import { DataType } from '..';
import Parser from './Parser';
import Configuration, { SecureType, EncodeType } from './Configuration';

export default class Transformer extends Parser {

    private lastKeyIndex: number = 0;

    private lastValueIndex: number = 0;

    public transform(data: DataType, secure: SecureType = this.configuration.getSecure(), encode: EncodeType = null): { [x: string]: any} {
        this.data = data;
        return this.getResponseData(this.handleTransform(data, secure, encode), secure, encode);
    }

    private handleTransform(data: DataType, secure?: SecureType, encode?: EncodeType): { [x: string]: any} {
        let transformed: DataType = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                const newKey = this.transformKey(key);
                let isEncode = false;
                if(typeof encode === 'string') {
                    isEncode = encode == key;
                }
                if(encode instanceof RegExp) {
                    isEncode = !!encode.exec(key);
                }
                if(Array.isArray(element)) {
                    transformed[newKey] = element.map(value => this.transform(value, secure, encode));
                }else if(typeof element === 'object') {
                    transformed[newKey] = this.transform(element, secure, encode);
                }else{
                    transformed[newKey] = this.transformValue(element, 
                                                secure === 'all' || (Array.isArray(secure) && secure.indexOf(key) !== -1), 
                                                isEncode);
                }

            }
        }

        return transformed;
    }

    private transformKey(keyValue: string|number): string {
        if(typeof keyValue === 'number') keyValue = keyValue.toString();
        const transformedKey = '$' + this.lastKeyIndex; //returned key
        //Check if already exist
        for (const key in this.keys) {
            if (this.keys.hasOwnProperty(key)) {
                const element = this.keys[key];
                if(element === keyValue) return key;
            }
        }

        this.keys[transformedKey] = keyValue; //Assign the new key to the corresponding keyValue
        this.lastKeyIndex++; //Increment for the next

        return transformedKey;
    }

    private transformValue(value: any, secure: boolean, encode: boolean): string {
        const transformedKey = '$' + this.lastValueIndex; //returned key
        //Check if already exist
        for (const key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                const element = this.values[key];
                //If exist just return the key
                if(element === value) return key;
            }
        }
        if(typeof value === 'string' && secure && !!this.secure) {
            value = this.secure.encrypt(value);
        }
        if(encode && (typeof value === 'string' || typeof value === 'number')) value = Parser.encodeString(value);
        //If doesn't exist then add to the array
        this.values[transformedKey] = value //Assign the new key to the corresponding value
        this.lastValueIndex++; //Increment for the next

        return transformedKey;
    }
}