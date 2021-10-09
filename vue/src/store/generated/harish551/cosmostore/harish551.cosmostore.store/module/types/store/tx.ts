/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'harish551.cosmostore.store'

export interface MsgMintItem {
  creator: string
  name: string
  description: string
}

export interface MsgMintItemResponse {}

const baseMsgMintItem: object = { creator: '', name: '', description: '' }

export const MsgMintItem = {
  encode(message: MsgMintItem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintItem } as MsgMintItem
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.description = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMintItem {
    const message = { ...baseMsgMintItem } as MsgMintItem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    return message
  },

  toJSON(message: MsgMintItem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial(object: DeepPartial<MsgMintItem>): MsgMintItem {
    const message = { ...baseMsgMintItem } as MsgMintItem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    return message
  }
}

const baseMsgMintItemResponse: object = {}

export const MsgMintItemResponse = {
  encode(_: MsgMintItemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintItemResponse } as MsgMintItemResponse
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

  fromJSON(_: any): MsgMintItemResponse {
    const message = { ...baseMsgMintItemResponse } as MsgMintItemResponse
    return message
  },

  toJSON(_: MsgMintItemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgMintItemResponse>): MsgMintItemResponse {
    const message = { ...baseMsgMintItemResponse } as MsgMintItemResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  MintItem(request: MsgMintItem): Promise<MsgMintItemResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  MintItem(request: MsgMintItem): Promise<MsgMintItemResponse> {
    const data = MsgMintItem.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.store.Msg', 'MintItem', data)
    return promise.then((data) => MsgMintItemResponse.decode(new Reader(data)))
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
