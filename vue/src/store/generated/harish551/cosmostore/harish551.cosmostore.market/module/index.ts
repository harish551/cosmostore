// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgListItem } from "./types/market/tx";
import { MsgBuyItem } from "./types/market/tx";
import { MsgDelistItem } from "./types/market/tx";


const types = [
  ["/harish551.cosmostore.market.MsgListItem", MsgListItem],
  ["/harish551.cosmostore.market.MsgBuyItem", MsgBuyItem],
  ["/harish551.cosmostore.market.MsgDelistItem", MsgDelistItem],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgListItem: (data: MsgListItem): EncodeObject => ({ typeUrl: "/harish551.cosmostore.market.MsgListItem", value: data }),
    msgBuyItem: (data: MsgBuyItem): EncodeObject => ({ typeUrl: "/harish551.cosmostore.market.MsgBuyItem", value: data }),
    msgDelistItem: (data: MsgDelistItem): EncodeObject => ({ typeUrl: "/harish551.cosmostore.market.MsgDelistItem", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
