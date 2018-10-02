import KeyGenerator, { KeysType } from "./KeyGenerator";

export type SecureKeyType = {
    encrypt: string,
    decrypt: string
};

export class Secure {

    private encryptKey: KeysType;
    private decryptKey: KeysType;

    constructor(key: SecureKeyType) {
        this.encryptKey = KeyGenerator.getCoupleKey(key.encrypt);
        this.decryptKey = KeyGenerator.getCoupleKey(key.decrypt);
    }

    public encrypt(message: string): string {
        const ascii = this.stringToASCII(message);
        let encrypts: number[] = [];
        if(this.encryptKey !== null && !!this.encryptKey.key && !!this.encryptKey.n) {
            encrypts = ascii.map(value => Math.pow(value, this.encryptKey.key) % this.encryptKey.n);
        }else{
            throw new ReferenceError('You must set the encrypt Key before');
        }

        return this.asciiToString(encrypts);
    }

    public decrypt(message: string): string {
        const ascii = this.stringToASCII(message);
        let decrypts: number[] = [];
        if(this.decryptKey !== null && !!this.decryptKey.key && !!this.decryptKey.n) {
            decrypts = ascii.map(value => typeof value != 'number' ? value : Math.pow(value, this.decryptKey.key) % this.decryptKey.n);
        }else{
            throw new ReferenceError('You must set the decrypt Key before');
        }

        return this.asciiToString(decrypts);
    }

    private stringToASCII(text: string): any[] {
        return text.split('').map(char => isNaN(char.charCodeAt(0)) ? char : char.charCodeAt(0));
    }

    private asciiToString(ascii: any[]): string {
        return ascii.map(value => typeof value != 'number' ? value : String.fromCharCode(value)).join('');
    }
}