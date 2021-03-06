/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { MarketItem } from '../market/market_item'

export const protobufPackage = 'harish551.cosmostore.market'

/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  marketItemList: MarketItem[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  marketItemCount: number
}

const baseGenesisState: object = { marketItemCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.marketItemList) {
      MarketItem.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.marketItemCount !== 0) {
      writer.uint32(16).uint64(message.marketItemCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.marketItemList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.marketItemList.push(MarketItem.decode(reader, reader.uint32()))
          break
        case 2:
          message.marketItemCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.marketItemList = []
    if (object.marketItemList !== undefined && object.marketItemList !== null) {
      for (const e of object.marketItemList) {
        message.marketItemList.push(MarketItem.fromJSON(e))
      }
    }
    if (object.marketItemCount !== undefined && object.marketItemCount !== null) {
      message.marketItemCount = Number(object.marketItemCount)
    } else {
      message.marketItemCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.marketItemList) {
      obj.marketItemList = message.marketItemList.map((e) => (e ? MarketItem.toJSON(e) : undefined))
    } else {
      obj.marketItemList = []
    }
    message.marketItemCount !== undefined && (obj.marketItemCount = message.marketItemCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.marketItemList = []
    if (object.marketItemList !== undefined && object.marketItemList !== null) {
      for (const e of object.marketItemList) {
        message.marketItemList.push(MarketItem.fromPartial(e))
      }
    }
    if (object.marketItemCount !== undefined && object.marketItemCount !== null) {
      message.marketItemCount = object.marketItemCount
    } else {
      message.marketItemCount = 0
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
