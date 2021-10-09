/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { MarketItem } from '../market/market_item'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'harish551.cosmostore.market'

export interface QueryGetMarketItemRequest {
  id: number
}

export interface QueryGetMarketItemResponse {
  MarketItem: MarketItem | undefined
}

export interface QueryAllMarketItemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllMarketItemResponse {
  MarketItem: MarketItem[]
  pagination: PageResponse | undefined
}

const baseQueryGetMarketItemRequest: object = { id: 0 }

export const QueryGetMarketItemRequest = {
  encode(message: QueryGetMarketItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMarketItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMarketItemRequest } as QueryGetMarketItemRequest
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

  fromJSON(object: any): QueryGetMarketItemRequest {
    const message = { ...baseQueryGetMarketItemRequest } as QueryGetMarketItemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetMarketItemRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMarketItemRequest>): QueryGetMarketItemRequest {
    const message = { ...baseQueryGetMarketItemRequest } as QueryGetMarketItemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetMarketItemResponse: object = {}

export const QueryGetMarketItemResponse = {
  encode(message: QueryGetMarketItemResponse, writer: Writer = Writer.create()): Writer {
    if (message.MarketItem !== undefined) {
      MarketItem.encode(message.MarketItem, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMarketItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMarketItemResponse } as QueryGetMarketItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.MarketItem = MarketItem.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMarketItemResponse {
    const message = { ...baseQueryGetMarketItemResponse } as QueryGetMarketItemResponse
    if (object.MarketItem !== undefined && object.MarketItem !== null) {
      message.MarketItem = MarketItem.fromJSON(object.MarketItem)
    } else {
      message.MarketItem = undefined
    }
    return message
  },

  toJSON(message: QueryGetMarketItemResponse): unknown {
    const obj: any = {}
    message.MarketItem !== undefined && (obj.MarketItem = message.MarketItem ? MarketItem.toJSON(message.MarketItem) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMarketItemResponse>): QueryGetMarketItemResponse {
    const message = { ...baseQueryGetMarketItemResponse } as QueryGetMarketItemResponse
    if (object.MarketItem !== undefined && object.MarketItem !== null) {
      message.MarketItem = MarketItem.fromPartial(object.MarketItem)
    } else {
      message.MarketItem = undefined
    }
    return message
  }
}

const baseQueryAllMarketItemRequest: object = {}

export const QueryAllMarketItemRequest = {
  encode(message: QueryAllMarketItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMarketItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMarketItemRequest } as QueryAllMarketItemRequest
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

  fromJSON(object: any): QueryAllMarketItemRequest {
    const message = { ...baseQueryAllMarketItemRequest } as QueryAllMarketItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMarketItemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMarketItemRequest>): QueryAllMarketItemRequest {
    const message = { ...baseQueryAllMarketItemRequest } as QueryAllMarketItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllMarketItemResponse: object = {}

export const QueryAllMarketItemResponse = {
  encode(message: QueryAllMarketItemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.MarketItem) {
      MarketItem.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMarketItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMarketItemResponse } as QueryAllMarketItemResponse
    message.MarketItem = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.MarketItem.push(MarketItem.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllMarketItemResponse {
    const message = { ...baseQueryAllMarketItemResponse } as QueryAllMarketItemResponse
    message.MarketItem = []
    if (object.MarketItem !== undefined && object.MarketItem !== null) {
      for (const e of object.MarketItem) {
        message.MarketItem.push(MarketItem.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMarketItemResponse): unknown {
    const obj: any = {}
    if (message.MarketItem) {
      obj.MarketItem = message.MarketItem.map((e) => (e ? MarketItem.toJSON(e) : undefined))
    } else {
      obj.MarketItem = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMarketItemResponse>): QueryAllMarketItemResponse {
    const message = { ...baseQueryAllMarketItemResponse } as QueryAllMarketItemResponse
    message.MarketItem = []
    if (object.MarketItem !== undefined && object.MarketItem !== null) {
      for (const e of object.MarketItem) {
        message.MarketItem.push(MarketItem.fromPartial(e))
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
  /** Queries a marketItem by id. */
  MarketItem(request: QueryGetMarketItemRequest): Promise<QueryGetMarketItemResponse>
  /** Queries a list of marketItem items. */
  MarketItemAll(request: QueryAllMarketItemRequest): Promise<QueryAllMarketItemResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  MarketItem(request: QueryGetMarketItemRequest): Promise<QueryGetMarketItemResponse> {
    const data = QueryGetMarketItemRequest.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.market.Query', 'MarketItem', data)
    return promise.then((data) => QueryGetMarketItemResponse.decode(new Reader(data)))
  }

  MarketItemAll(request: QueryAllMarketItemRequest): Promise<QueryAllMarketItemResponse> {
    const data = QueryAllMarketItemRequest.encode(request).finish()
    const promise = this.rpc.request('harish551.cosmostore.market.Query', 'MarketItemAll', data)
    return promise.then((data) => QueryAllMarketItemResponse.decode(new Reader(data)))
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
