package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	storetypes "github.com/harish551/cosmostore/x/store/types"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/market/types"
)

func (k msgServer) BuyItem(goCtx context.Context, msg *types.MsgBuyItem) (*types.MsgBuyItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	id, err := strconv.ParseUint(msg.Id, 10, 64)
	if err != nil {
		return nil, err
	}
	marketItem, found := k.GetMarketItem(ctx, id)
	if !found {
		return nil, sdkerrors.Wrap(types.ErrSample, "Sample Error")
	}
	itd, err := strconv.ParseUint(marketItem.ItemID, 10, 64)
	if err != nil {
		return nil, err
	}
	if !marketItem.Price.IsEqual(msg.Price) {
		return nil, sdkerrors.Wrap(types.ErrSample, "Sample Error")
	}
	val, found := k.storeKeeper.GetItem(ctx, itd)
	buyer, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	owner, err := sdk.AccAddressFromBech32(marketItem.Owner)
	if err != nil {
		return nil, err
	}
	err = k.bankKeeper.SendCoins(ctx, buyer, owner, marketItem.Price)
	if err != nil {
		return nil, err
	}
    k.storeKeeper.Transfer(ctx, val.Id, buyer)
	k.RemoveMarketItem(ctx, marketItem.Id)
	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(
			types.EventTypeBuyItem,
			sdk.NewAttribute(types.AttributeKeyItemId, marketItem.ItemID),
			sdk.NewAttribute(types.AttributeKeyOwner, owner.String()),
			sdk.NewAttribute(types.AttributeKeyBuyer, buyer.String()),
		),
		sdk.NewEvent(
			sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, msg.Creator),
		),
		sdk.NewEvent(
			types.EventTypeTransferItem,
			sdk.NewAttribute(sdk.AttributeKeyModule, storetypes.AttributeValueCategory),
			sdk.NewAttribute(sdk.AttributeKeySender, owner.String()),
			sdk.NewAttribute(types.AttributeKeyRecipient, buyer.String()),
		),
	})
	return &types.MsgBuyItemResponse{}, nil
}
