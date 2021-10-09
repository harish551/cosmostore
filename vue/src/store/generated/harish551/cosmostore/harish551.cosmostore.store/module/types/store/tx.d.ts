import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "harish551.cosmostore.store";
export interface MsgMintItem {
    creator: string;
    name: string;
    description: string;
}
export interface MsgMintItemResponse {
}
export declare const MsgMintItem: {
    encode(message: MsgMintItem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintItem;
    fromJSON(object: any): MsgMintItem;
    toJSON(message: MsgMintItem): unknown;
    fromPartial(object: DeepPartial<MsgMintItem>): MsgMintItem;
};
export declare const MsgMintItemResponse: {
    encode(_: MsgMintItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintItemResponse;
    fromJSON(_: any): MsgMintItemResponse;
    toJSON(_: MsgMintItemResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintItemResponse>): MsgMintItemResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MintItem(request: MsgMintItem): Promise<MsgMintItemResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    MintItem(request: MsgMintItem): Promise<MsgMintItemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
