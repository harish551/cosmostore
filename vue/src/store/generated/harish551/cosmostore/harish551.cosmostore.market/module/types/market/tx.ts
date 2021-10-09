/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Coin } from '../cosmos/base/v1beta1/coin'

export const protobufPackage = 'harish551.cosmostore.market'

export interface MsgListItem {
  creator: string
  itemID: string
  price: Coin[]
}

export interface MsgListItemResponse {}

export interface MsgDelistItem {
  creator: string
  id: string
}

export interface MsgDelistItemResponse {}

export interface MsgBuyItem {
  creator: string
  id: string
  price: Coin[]
}

export interface MsgBuyItemResponse {}

const baseMsgListItem: object = { creator: '', itemID: '' }

export const MsgListItem = {
  encode(message: MsgListItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.itemID !== '') {
      writer.uint32(18).string(message.itemID)
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgListItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgListItem } as MsgListItem
    message.price = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.itemID = reader.string()
          break
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgListItem {
    const message = { ...baseMsgListItem } as MsgListItem
    message.price = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    return message
  },

  toJSON(message: MsgListItem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.itemID !== undefined && (obj.itemID = message.itemID)
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.price = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgListItem>): MsgListItem {
    const message = { ...baseMsgListItem } as MsgListItem
    message.price = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    return message
  }
}

const baseMsgListItemResponse: object = {}

export const MsgListItemResponse = {
  encode(_: MsgListItemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgListItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgListItemResponse {
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse
    return message
  },

  toJSON(_: MsgListItemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgListItemResponse>): MsgListItemResponse {
    const message = { ...baseMsgListItemResponse } as MsgListItemResponse
    return message
  }
}

const baseMsgDelistItem: object = { creator: '', id: '' }

export const MsgDelistItem = {
  encode(message: MsgDelistItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelistItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDelistItem } as MsgDelistItem
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDelistItem {
    const message = { ...baseMsgDelistItem } as MsgDelistItem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    return message
  },

  toJSON(message: MsgDelistItem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDelistItem>): MsgDelistItem {
    const message = { ...baseMsgDelistItem } as MsgDelistItem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    return message
  }
}

const baseMsgDelistItemResponse: object = {}

export const MsgDelistItemResponse = {
  encode(_: MsgDelistItemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelistItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDelistItemResponse } as MsgDelistItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDelistItemResponse {
    const message = { ...baseMsgDelistItemResponse } as MsgDelistItemResponse
    return message
  },

  toJSON(_: MsgDelistItemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDelistItemResponse>): MsgDelistItemResponse {
    const message = { ...baseMsgDelistItemResponse } as MsgDelistItemResponse
    return message
  }
}

const baseMsgBuyItem: object = { creator: '', id: '' }

export const MsgBuyItem = {
  encode(message: MsgBuyItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyItem } as MsgBuyItem
    message.price = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBuyItem {
    const message = { ...baseMsgBuyItem } as MsgBuyItem
    message.price = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgBuyItem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    if (message.price) {
      obj.price = message.price.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.price = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuyItem>): MsgBuyItem {
    const message = { ...baseMsgBuyItem } as MsgBuyItem
    message.price = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.price !== undefined && object.price !== null) {
      for (const e of object.price) {
        message.price.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}

const baseMsgBuyItemResponse: object = {}

export const MsgBuyItemResponse = {
  encode(_: MsgBuyItemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyItemResponse } as MsgBuyItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgBuyItemResponse {
    const message = { ...baseMsgBuyItemResponse } as MsgBuyItemResponse
    return message
  },

  toJSON(_: MsgBuyItemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBuyItemResponse>): MsgBuyItemResponse {
    const message = { ...baseMsgBuyItemResponse } as MsgBuyItemResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  ListItem(request: MsgListItem): Promise<MsgListItemResponse>
  DelistItem(request: MsgDelistItem): Promise<MsgDelistItemResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BuyItem(request: MsgBuyItem): Promise<MsgBuyItemResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  ListItem(request: MsgListItem): Promise<MsgListItemResponse> {
    const data = MsgListItem.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.market.Msg', 'ListItem', data)
    return promise.then((data) => MsgListItemResponse.decode(new Reader(data)))
  }

  DelistItem(request: MsgDelistItem): Promise<MsgDelistItemResponse> {
    const data = MsgDelistItem.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.market.Msg', 'DelistItem', data)
    return promise.then((data) => MsgDelistItemResponse.decode(new Reader(data)))
  }

  BuyItem(request: MsgBuyItem): Promise<MsgBuyItemResponse> {
    const data = MsgBuyItem.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.market.Msg', 'BuyItem', data)
    return promise.then((data) => MsgBuyItemResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

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
