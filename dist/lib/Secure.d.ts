export declare type SecureKeyType = {
    encrypt: string;
    decrypt: string;
};
export declare class Secure {
    private encryptKey;
    private decryptKey;
    constructor(key: SecureKeyType);
    encrypt(message: string): string;
    decrypt(message: string): string;
    private stringToASCII;
    private asciiToString;
}
