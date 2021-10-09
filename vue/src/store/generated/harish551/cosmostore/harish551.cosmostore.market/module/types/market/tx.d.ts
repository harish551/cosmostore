import { Reader, Writer } from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "harish551.cosmostore.market";
export interface MsgListItem {
    creator: string;
    itemID: string;
    price: Coin[];
}
export interface MsgListItemResponse {
}
export interface MsgDelistItem {
    creator: string;
    id: string;
}
export interface MsgDelistItemResponse {
}
export interface MsgBuyItem {
    creator: string;
    id: string;
    price: Coin[];
}
export interface MsgBuyItemResponse {
}
export declare const MsgListItem: {
    encode(message: MsgListItem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgListItem;
    fromJSON(object: any): MsgListItem;
    toJSON(message: MsgListItem): unknown;
    fromPartial(object: DeepPartial<MsgListItem>): MsgListItem;
};
export declare const MsgListItemResponse: {
    encode(_: MsgListItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgListItemResponse;
    fromJSON(_: any): MsgListItemResponse;
    toJSON(_: MsgListItemResponse): unknown;
    fromPartial(_: DeepPartial<MsgListItemResponse>): MsgListItemResponse;
};
export declare const MsgDelistItem: {
    encode(message: MsgDelistItem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDelistItem;
    fromJSON(object: any): MsgDelistItem;
    toJSON(message: MsgDelistItem): unknown;
    fromPartial(object: DeepPartial<MsgDelistItem>): MsgDelistItem;
};
export declare const MsgDelistItemResponse: {
    encode(_: MsgDelistItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDelistItemResponse;
    fromJSON(_: any): MsgDelistItemResponse;
    toJSON(_: MsgDelistItemResponse): unknown;
    fromPartial(_: DeepPartial<MsgDelistItemResponse>): MsgDelistItemResponse;
};
export declare const MsgBuyItem: {
    encode(message: MsgBuyItem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyItem;
    fromJSON(object: any): MsgBuyItem;
    toJSON(message: MsgBuyItem): unknown;
    fromPartial(object: DeepPartial<MsgBuyItem>): MsgBuyItem;
};
export declare const MsgBuyItemResponse: {
    encode(_: MsgBuyItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyItemResponse;
    fromJSON(_: any): MsgBuyItemResponse;
    toJSON(_: MsgBuyItemResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyItemResponse>): MsgBuyItemResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    ListItem(request: MsgListItem): Promise<MsgListItemResponse>;
    DelistItem(request: MsgDelistItem): Promise<MsgDelistItemResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    BuyItem(request: MsgBuyItem): Promise<MsgBuyItemResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ListItem(request: MsgListItem): Promise<MsgListItemResponse>;
    DelistItem(request: MsgDelistItem): Promise<MsgDelistItemResponse>;
    BuyItem(request: MsgBuyItem): Promise<MsgBuyItemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
