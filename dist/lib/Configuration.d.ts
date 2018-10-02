export declare type SecureType = 'all' | 'none' | string[];
export declare type EncodeType = string | RegExp | null;
export declare type KeyType = 'v' | 't' | 's';
export declare type ConfigType = {
    v: string;
    t: boolean;
    s: SecureType;
};
export default class Configuration {
    static fields: {
        version: string;
        secure: string;
        encode: string;
        transform: string;
    };
    static defaultConfig: ConfigType;
    private config;
    constructor(config?: ConfigType);
    hasVersionProperty(): boolean;
    hasSecureProperty(): boolean;
    hasEncodeProperty(): boolean;
    getConfig(): ConfigType;
    setConfig(config: ConfigType): void;
    getSecure(): SecureType;
    getVersion(): string;
    getTransform(): boolean;
    protected getConfigPropertyValue(key: KeyType): string | boolean | string[];
}
