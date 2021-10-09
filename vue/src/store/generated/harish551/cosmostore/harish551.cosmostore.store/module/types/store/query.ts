/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Item } from '../store/item'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'harish551.cosmostore.store'

export interface QueryGetItemRequest {
  id: number
}

export interface QueryGetItemResponse {
  Item: Item | undefined
}

export interface QueryAllItemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllItemResponse {
  Item: Item[]
  pagination: PageResponse | undefined
}

const baseQueryGetItemRequest: object = { id: 0 }

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetItemResponse: object = {}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: Writer = Writer.create()): Writer {
    if (message.Item !== undefined) {
      Item.encode(message.Item, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item = Item.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromJSON(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {}
    message.Item !== undefined && (obj.Item = message.Item ? Item.toJSON(message.Item) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromPartial(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  }
}

const baseQueryAllItemRequest: object = {}

export const QueryAllItemRequest = {
  encode(message: QueryAllItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllItemResponse: object = {}

export const QueryAllItemResponse = {
  encode(message: QueryAllItemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Item) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item.push(Item.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemResponse): unknown {
    const obj: any = {}
    if (message.Item) {
      obj.Item = message.Item.map((e) => (e ? Item.toJSON(e) : undefined))
    } else {
      obj.Item = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a item by id. */
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>
  /** Queries a list of item items. */
  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const data = QueryGetItemRequest.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.store.Query', 'Item', data)
    return promise.then((data) => QueryGetItemResponse.decode(new Reader(data)))
  }

  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse> {
    const data = QueryAllItemRequest.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.store.Query', 'ItemAll', data)
    return promise.then((data) => QueryAllItemResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
