package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/harish551/cosmostore/x/market/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MarketItemAll(c context.Context, req *types.QueryAllMarketItemRequest) (*types.QueryAllMarketItemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var marketItems []types.MarketItem
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	marketItemStore := prefix.NewStore(store, types.KeyPrefix(types.MarketItemKey))

	pageRes, err := query.Paginate(marketItemStore, req.Pagination, func(key []byte, value []byte) error {
		var marketItem types.MarketItem
		if err := k.cdc.Unmarshal(value, &marketItem); err != nil {
			return err
		}

		marketItems = append(marketItems, marketItem)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMarketItemResponse{MarketItem: marketItems, Pagination: pageRes}, nil
}

func (k Keeper) MarketItem(c context.Context, req *types.QueryGetMarketItemRequest) (*types.QueryGetMarketItemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	marketItem, found := k.GetMarketItem(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetMarketItemResponse{MarketItem: marketItem}, nil
}
