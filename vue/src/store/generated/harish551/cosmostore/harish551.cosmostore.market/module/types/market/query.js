/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { MarketItem } from '../market/market_item';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'harish551.cosmostore.market';
const baseQueryGetMarketItemRequest = { id: 0 };
export const QueryGetMarketItemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMarketItemRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMarketItemRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMarketItemRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetMarketItemResponse = {};
export const QueryGetMarketItemResponse = {
    encode(message, writer = Writer.create()) {
        if (message.MarketItem !== undefined) {
            MarketItem.encode(message.MarketItem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMarketItemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MarketItem = MarketItem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMarketItemResponse };
        if (object.MarketItem !== undefined && object.MarketItem !== null) {
            message.MarketItem = MarketItem.fromJSON(object.MarketItem);
        }
        else {
            message.MarketItem = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.MarketItem !== undefined && (obj.MarketItem = message.MarketItem ? MarketItem.toJSON(message.MarketItem) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMarketItemResponse };
        if (object.MarketItem !== undefined && object.MarketItem !== null) {
            message.MarketItem = MarketItem.fromPartial(object.MarketItem);
        }
        else {
            message.MarketItem = undefined;
        }
        return message;
    }
};
const baseQueryAllMarketItemRequest = {};
export const QueryAllMarketItemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMarketItemRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMarketItemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMarketItemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllMarketItemResponse = {};
export const QueryAllMarketItemResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.MarketItem) {
            MarketItem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMarketItemResponse };
        message.MarketItem = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MarketItem.push(MarketItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllMarketItemResponse };
        message.MarketItem = [];
        if (object.MarketItem !== undefined && object.MarketItem !== null) {
            for (const e of object.MarketItem) {
                message.MarketItem.push(MarketItem.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.MarketItem) {
            obj.MarketItem = message.MarketItem.map((e) => (e ? MarketItem.toJSON(e) : undefined));
        }
        else {
            obj.MarketItem = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMarketItemResponse };
        message.MarketItem = [];
        if (object.MarketItem !== undefined && object.MarketItem !== null) {
            for (const e of object.MarketItem) {
                message.MarketItem.push(MarketItem.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    MarketItem(request) {
        const data = QueryGetMarketItemRequest.encode(request).finish();
        const promise = this.rpc.request('harish551.cosmostore.market.Query', 'MarketItem', data);
        return promise.then((data) => QueryGetMarketItemResponse.decode(new Reader(data)));
    }
    MarketItemAll(request) {
        const data = QueryAllMarketItemRequest.encode(request).finish();
        const promise = this.rpc.request('harish551.cosmostore.market.Query', 'MarketItemAll', data);
        return promise.then((data) => QueryAllMarketItemResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
