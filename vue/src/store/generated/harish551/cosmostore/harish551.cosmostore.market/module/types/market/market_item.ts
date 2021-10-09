/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'harish551.cosmostore.market'

export interface MarketItem {
  id: number
  itemID: string
  price: Coin[]
  owner: string
}

const baseMarketItem: object = { id: 0, itemID: '', owner: '' }

export const MarketItem = {
  encode(message: MarketItem, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.itemID !== '') {
      writer.uint32(18).string(message.itemID)
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MarketItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMarketItem } as MarketItem
    message.price = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.itemID = reader.string()
          break
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()))
          break
        case 4:
          message.owner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MarketItem {
    const message = { ...baseMarketItem } as MarketItem
    message.price = []
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.itemID !== undefined && object.itemID !== null) {
      message.itemID = String(object.itemID)
    } else {
      message.itemID = ''
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e))
      }
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MarketItem): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.itemID !== undefined && (obj.itemID = message.itemID)
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.price = []
    }
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MarketItem>): MarketItem {
    const message = { ...baseMarketItem } as MarketItem
    message.price = []
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.itemID !== undefined && object.itemID !== null) {
      message.itemID = object.itemID
    } else {
      message.itemID = ''
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e))
      }
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
