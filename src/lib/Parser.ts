import { DataType } from '..';
import { SecureKeyType, Secure } from './Secure';
import Configuration from './Configuration';

export default class Parser {

    static fields = {
        data: 'd',
        config: 'c',
        keys: 'k',
        values: 'v'
    };

    protected configuration: Configuration;

    protected data?: DataType;

    protected secureKey?: SecureKeyType;

    protected secure?: Secure;

    protected keys: { [x: string]: string } = {};

    protected values: { [x: string]: any } = {};

    constructor(secureKey?: SecureKeyType) {
        this.secureKey = secureKey;
        if(secureKey) this.secure = new Secure(secureKey);
        this.configuration = new Configuration();
    }

    protected hasConfigProperty(): boolean {
        return !!this.data && this.data.hasOwnProperty('c');
    }

    protected populateConfiguration(): void {
        if(!!this.data && this.hasConfigProperty()) {
            this.configuration.setConfig(this.data['c']);
        }
    }

    protected isRegular(): boolean {
        if(this.hasConfigProperty() && this.configuration.hasVersionProperty()) {
            const version = this.configuration.getVersion();
            if(version === Configuration.defaultConfig.v && this.configuration.getTransform()) {
                return true;
            }
        }

        return false;
    }

    protected getResponseData(data: { [x: string]: any}, secure: any, encode: any) {
        return {
            [Parser.fields.config]: Object.assign(Configuration.defaultConfig, { [Configuration.fields.secure]: secure /*[Configuration.fields.encode]: encode*/ }),
            [Parser.fields.keys]: this.keys,
            [Parser.fields.values]: this.values,
            [Parser.fields.data]: data
        };
    }

    static encodeString(raw: string | number): string {
        if(typeof raw === 'number') raw = raw.toString();

        return btoa(raw);
    }

    static decodeString(encodedString: string): string {
        return atob(encodedString);
    }

    static create(secureKey?: SecureKeyType): Parser {
        return new this(secureKey);
    }
}