export type KeysType = {
    n: number,
    key: number
};

export default class KeyGenerator {

    private p: number = 0;
    private q: number = 0;
    private n: number = 0;
    private e: number = 0;
    private d: number = 0;
    private phi: number = 0;

    public async init() {
        await this.initP();
        await this.initQ();
        if(this.p === 0 || this.q === 0) {
            await this.init();
        } else {
            this.n = this.p * this.q;
            this.phi = (this.p - 1) * (this.q - 1);
            await this.initD();
            this.e = 1 / (this.d % this.phi);
        }
    }

    private initP(): Promise<void> {
        return new Promise(resolve => {
            let isDone = false;
            const gen = this.randomPremier();
            while(!isDone) {
                const next = gen.next();
                if(!next.done) this.p = next.value;
                isDone = next.done;
                if(isDone) resolve();
            }
        });
    }

    private initQ(): Promise<void> {
        return new Promise((resolve, reject) => {
            let isDone = false;
            const gen = this.randomPremier(this.p * 2);
            while(!isDone) {
                const next = gen.next();
                if(!next.done) this.q = next.value;
                isDone = next.done;
                if(isDone) resolve();
            }
        });
    }

    private async initD() {
        let pgcd = 0;
        this.d = this.p;
        while(pgcd !== 1) {
            let isFound = false;
            await new Promise(resolve => {
                while(!isFound) {
                    if((this.p < this.d) && (this.q < this.d) && (this.d < this.phi)) isFound = true;
                    this.d++;
                    if(isFound) resolve();
                }
            });
            pgcd = await this.calculatePGCD(this.d, this.phi);
        }
    }

    private calculatePGCD(a: number, b: number): Promise<number> {
        return new Promise(resolve => {
            while(a !== b) {
                if(a > b) {
                    a -= b;
                } else {
                    b -= a;
                }
                if(a === b) {
                    resolve(a);
                }
            }
        })
    }

    private *randomPremier(min: number = Date.now()): IterableIterator<number> {
        const arrayOfValues = new Array((min * 3) - min);
        let premier: number = 0;
        while(premier === 0) {
            const result = arrayOfValues.map((_, index) => index + min).find(value => {
                return this.isPremier(value);
            });
            premier = result !== undefined ? result : 0;
            yield premier;
        }
    }

    private isPremier(num: number): boolean {
        return !new Array(Math.round(num / 2)).some((_, index) => num % index === 0);
    }

    public keys(): { encrypt: string, decrypt: string } {
        return {
            encrypt: btoa(this.n.toString(16)) + '.' + btoa(this.e.toString(16)),
            decrypt: btoa(this.n.toString(16)) + '.' + btoa(this.d.toString(16))
        };
    }

    public static getCoupleKey(str?: string): KeysType {
        if(str === undefined) return { n: 0, key: 0};

        const keys: string[] = str.split('.');
        return { 
            n: parseInt(atob(keys[0]), 16), 
            key: parseInt(atob(keys[1]), 16) 
        };
    }
}