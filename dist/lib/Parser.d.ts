import { DataType } from '..';
import { SecureKeyType, Secure } from './Secure';
import Configuration from './Configuration';
export default class Parser {
    static fields: {
        data: string;
        config: string;
        keys: string;
        values: string;
    };
    protected configuration: Configuration;
    protected data?: DataType;
    protected secureKey?: SecureKeyType;
    protected secure?: Secure;
    protected keys: {
        [x: string]: string;
    };
    protected values: {
        [x: string]: any;
    };
    constructor(secureKey?: SecureKeyType);
    protected hasConfigProperty(): boolean;
    protected populateConfiguration(): void;
    protected isRegular(): boolean;
    protected getResponseData(data: {
        [x: string]: any;
    }, secure: any, encode: any): {
        [x: string]: {
            [x: string]: any;
        };
    };
    static encodeString(raw: string | number): string;
    static decodeString(encodedString: string): string;
    static create(secureKey?: SecureKeyType): Parser;
}
