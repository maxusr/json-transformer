export declare type KeysType = {
    n: number;
    key: number;
};
export default class KeyGenerator {
    private p;
    private q;
    private n;
    private e;
    private d;
    private phi;
    init(): Promise<void>;
    private initP;
    private initQ;
    private initD;
    private calculatePGCD;
    private randomPremier;
    private isPremier;
    keys(): {
        encrypt: string;
        decrypt: string;
    };
    static getCoupleKey(str?: string): KeysType;
}
