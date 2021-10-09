import { Writer, Reader } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "harish551.cosmostore.market";
export interface MarketItem {
    id: number;
    itemID: string;
    price: Coin[];
    owner: string;
}
export declare const MarketItem: {
    encode(message: MarketItem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MarketItem;
    fromJSON(object: any): MarketItem;
    toJSON(message: MarketItem): unknown;
    fromPartial(object: DeepPartial<MarketItem>): MarketItem;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
