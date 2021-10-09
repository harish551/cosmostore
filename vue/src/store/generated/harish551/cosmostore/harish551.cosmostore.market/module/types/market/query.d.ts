import { Reader, Writer } from 'protobufjs/minimal';
import { MarketItem } from '../market/market_item';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "harish551.cosmostore.market";
export interface QueryGetMarketItemRequest {
    id: number;
}
export interface QueryGetMarketItemResponse {
    MarketItem: MarketItem | undefined;
}
export interface QueryAllMarketItemRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMarketItemResponse {
    MarketItem: MarketItem[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetMarketItemRequest: {
    encode(message: QueryGetMarketItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMarketItemRequest;
    fromJSON(object: any): QueryGetMarketItemRequest;
    toJSON(message: QueryGetMarketItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMarketItemRequest>): QueryGetMarketItemRequest;
};
export declare const QueryGetMarketItemResponse: {
    encode(message: QueryGetMarketItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMarketItemResponse;
    fromJSON(object: any): QueryGetMarketItemResponse;
    toJSON(message: QueryGetMarketItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMarketItemResponse>): QueryGetMarketItemResponse;
};
export declare const QueryAllMarketItemRequest: {
    encode(message: QueryAllMarketItemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMarketItemRequest;
    fromJSON(object: any): QueryAllMarketItemRequest;
    toJSON(message: QueryAllMarketItemRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMarketItemRequest>): QueryAllMarketItemRequest;
};
export declare const QueryAllMarketItemResponse: {
    encode(message: QueryAllMarketItemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMarketItemResponse;
    fromJSON(object: any): QueryAllMarketItemResponse;
    toJSON(message: QueryAllMarketItemResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMarketItemResponse>): QueryAllMarketItemResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a marketItem by id. */
    MarketItem(request: QueryGetMarketItemRequest): Promise<QueryGetMarketItemResponse>;
    /** Queries a list of marketItem items. */
    MarketItemAll(request: QueryAllMarketItemRequest): Promise<QueryAllMarketItemResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    MarketItem(request: QueryGetMarketItemRequest): Promise<QueryGetMarketItemResponse>;
    MarketItemAll(request: QueryAllMarketItemRequest): Promise<QueryAllMarketItemResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
