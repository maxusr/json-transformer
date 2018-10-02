export type SecureType = 'all' | 'none' | string[];
export type EncodeType = string | RegExp | null;
export type KeyType = 'v' | 't' | 's';
export type ConfigType = {
    v: string,
    t: boolean,
    s: SecureType
};

export default class Configuration {

    static fields = {
        version: 'v',
        secure: 's',
        encode: 'e',
        transform: 't'
    };

    static defaultConfig: ConfigType = {
        v: '1M0B0',
        t: true,
        s: 'all'
    };

    private config: ConfigType

    constructor(config: ConfigType = Configuration.defaultConfig) {
        this.config = config;
    }

    public hasVersionProperty(): boolean {
        return this.config.hasOwnProperty(Configuration.fields.version);
    }

    public hasSecureProperty(): boolean {
        return this.config.hasOwnProperty(Configuration.fields.secure);
    }

    public hasEncodeProperty(): boolean {
        return this.config.hasOwnProperty(Configuration.fields.encode);
    }

    public getConfig(): ConfigType {
        return this.config ? this.config : Configuration.defaultConfig;
    }

    public setConfig(config: ConfigType) {
        this.config = config;
    }

    public getSecure(): SecureType {
        return this.hasSecureProperty() ? this.config.s :  Configuration.defaultConfig.s;
    }

    public getVersion(): string {
        return this.hasSecureProperty() ? this.config.v :  Configuration.defaultConfig.v;
    }

    public getTransform(): boolean {
        return this.config.t;
    }

    protected getConfigPropertyValue(key: KeyType) {
        return this.config[key];
    }
}