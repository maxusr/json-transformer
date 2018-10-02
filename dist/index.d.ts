import Parser from './lib/Parser';
import { SecureKeyType } from './lib/Secure';
export declare type DataType = {
    [x: string]: any;
};
export { default as Transformer } from './lib/Tranformer';
export { default as Reverser } from './lib/Reverser';
export declare const decodeString: typeof Parser.decodeString;
export declare const encodeString: typeof Parser.encodeString;
export declare const transform: (data: DataType, secureKey?: SecureKeyType | undefined) => {
    [x: string]: any;
};
export declare const reverse: (data: DataType, secureKey?: SecureKeyType | undefined) => {
    [x: string]: any;
};
