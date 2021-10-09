package keeper

import (
	"context"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/market/types"
)

func (k msgServer) DelistItem(goCtx context.Context, msg *types.MsgDelistItem) (*types.MsgDelistItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	id, err := strconv.ParseUint(msg.Id, 10, 64)
	if err != nil {
		return nil, err
	}
	marketitem, found := k.GetMarketItem(ctx, id)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrSample, "Error")
	}
	k.RemoveMarketItem(ctx, marketitem.Id)

	return &types.MsgDelistItemResponse{}, nil
}
