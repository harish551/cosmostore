/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Item } from '../store/item';
export const protobufPackage = 'harish551.cosmostore.store';
const baseGenesisState = { itemCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.itemList) {
            Item.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.itemCount !== 0) {
            writer.uint32(16).uint64(message.itemCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.itemList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.itemList.push(Item.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.itemCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.itemList = [];
        if (object.itemList !== undefined && object.itemList !== null) {
            for (const e of object.itemList) {
                message.itemList.push(Item.fromJSON(e));
            }
        }
        if (object.itemCount !== undefined && object.itemCount !== null) {
            message.itemCount = Number(object.itemCount);
        }
        else {
            message.itemCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.itemList) {
            obj.itemList = message.itemList.map((e) => (e ? Item.toJSON(e) : undefined));
        }
        else {
            obj.itemList = [];
        }
        message.itemCount !== undefined && (obj.itemCount = message.itemCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.itemList = [];
        if (object.itemList !== undefined && object.itemList !== null) {
            for (const e of object.itemList) {
                message.itemList.push(Item.fromPartial(e));
            }
        }
        if (object.itemCount !== undefined && object.itemCount !== null) {
            message.itemCount = object.itemCount;
        }
        else {
            message.itemCount = 0;
        }
        return message;
    }
};
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
