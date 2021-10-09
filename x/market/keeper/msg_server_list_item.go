package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/market/types"
)

func (k msgServer) ListItem(goCtx context.Context, msg *types.MsgListItem) (*types.MsgListItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	marketitem := types.MarketItem{
		Id:     k.GetMarketItemCount(ctx) + 1,
		ItemID: msg.ItemID,
		Price:  msg.Price,
		Owner:  msg.Creator,
	}
	_ = k.AppendMarketItem(ctx, marketitem)

	return &types.MsgListItemResponse{}, nil
}
