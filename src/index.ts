import Parser from './lib/Parser';
import { SecureKeyType } from './lib/Secure';
import Transformer from './lib/Tranformer';
import Reverser from './lib/Reverser';

export type DataType = { [x: string]: any };

export { default as Transformer } from './lib/Tranformer';
export { default as Reverser } from './lib/Reverser';

export const decodeString = Parser.decodeString;
export const encodeString = Parser.encodeString;

export const transform = (data: DataType, secureKey?: SecureKeyType) => {
    return (<Transformer>Transformer.create(secureKey)).transform(data);
}

export const reverse = (data: DataType, secureKey?: SecureKeyType) => {
    return (<Reverser> Reverser.create(secureKey)).reverse(data);
}