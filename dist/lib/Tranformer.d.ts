import { DataType } from '..';
import Parser from './Parser';
import { SecureType, EncodeType } from './Configuration';
export default class Transformer extends Parser {
    private lastKeyIndex;
    private lastValueIndex;
    transform(data: DataType, secure?: SecureType, encode?: EncodeType): {
        [x: string]: any;
    };
    private handleTransform;
    private transformKey;
    private transformValue;
}
