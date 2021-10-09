import { Reader, Writer } from 'protobufjs/minimal';
import { Item } from '../store/item';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "harish551.cosmostore.store";
export interface QueryGetItemRequest {
    id: number;
}
export interface QueryGetItemResponse {
    Item: Item | undefined;
}
export interface QueryAllItemRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllItemResponse {
    Item: Item[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetItemRequest: {
    encode(message: QueryGetItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest;
    fromJSON(object: any): QueryGetItemRequest;
    toJSON(message: QueryGetItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest;
};
export declare const QueryGetItemResponse: {
    encode(message: QueryGetItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse;
    fromJSON(object: any): QueryGetItemResponse;
    toJSON(message: QueryGetItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse;
};
export declare const QueryAllItemRequest: {
    encode(message: QueryAllItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest;
    fromJSON(object: any): QueryAllItemRequest;
    toJSON(message: QueryAllItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest;
};
export declare const QueryAllItemResponse: {
    encode(message: QueryAllItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse;
    fromJSON(object: any): QueryAllItemResponse;
    toJSON(message: QueryAllItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a item by id. */
    Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
    /** Queries a list of item items. */
    ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
    ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
