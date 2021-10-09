// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgListItem: (data) => ({ typeUrl: "/harish551.cosmostore.market.MsgListItem", value: data }),
        msgBuyItem: (data) => ({ typeUrl: "/harish551.cosmostore.market.MsgBuyItem", value: data }),
        msgDelistItem: (data) => ({ typeUrl: "/harish551.cosmostore.market.MsgDelistItem", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
