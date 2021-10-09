/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Item } from '../store/item'

export const protobufPackage = 'harish551.cosmostore.store'

/** GenesisState defines the store module's genesis state. */
export interface GenesisState {
  itemList: Item[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  itemCount: number
}

const baseGenesisState: object = { itemCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.itemList) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.itemCount !== 0) {
      writer.uint32(16).uint64(message.itemCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.itemList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.itemList.push(Item.decode(reader, reader.uint32()))
          break
        case 2:
          message.itemCount = longToNumber(reader.uint64() as Long)
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
    message.itemList = []
    if (object.itemList !== undefined && object.itemList !== null) {
      for (const e of object.itemList) {
        message.itemList.push(Item.fromJSON(e))
      }
    }
    if (object.itemCount !== undefined && object.itemCount !== null) {
      message.itemCount = Number(object.itemCount)
    } else {
      message.itemCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.itemList) {
      obj.itemList = message.itemList.map((e) => (e ? Item.toJSON(e) : undefined))
    } else {
      obj.itemList = []
    }
    message.itemCount !== undefined && (obj.itemCount = message.itemCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.itemList = []
    if (object.itemList !== undefined && object.itemList !== null) {
      for (const e of object.itemList) {
        message.itemList.push(Item.fromPartial(e))
      }
    }
    if (object.itemCount !== undefined && object.itemCount !== null) {
      message.itemCount = object.itemCount
    } else {
      message.itemCount = 0
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
