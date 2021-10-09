package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/store/types"
)

func (k msgServer) MintItem(goCtx context.Context, msg *types.MsgMintItem) (*types.MsgMintItemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	item := types.Item{
		Id:          k.GetItemCount(ctx) + uint64(1),
		Name:        msg.Name,
		Description: msg.Description,
		Owner:       msg.Creator,
	}
	// Add a item to the store and get back the ID
	_ = k.AppendItem(ctx, item)
	// Return the ID of the item
	return &types.MsgMintItemResponse{}, nil
}
