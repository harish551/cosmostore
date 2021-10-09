import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "harish551.cosmostore.store";
export interface Item {
    id: number;
    name: string;
    description: string;
    owner: string;
}
export declare const Item: {
    encode(message: Item, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Item;
    fromJSON(object: any): Item;
    toJSON(message: Item): unknown;
    fromPartial(object: DeepPartial<Item>): Item;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
