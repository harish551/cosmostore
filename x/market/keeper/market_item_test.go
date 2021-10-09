package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/market/keeper"
	"github.com/harish551/cosmostore/x/market/types"
	"github.com/stretchr/testify/require"
)

func createNMarketItem(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MarketItem {
	items := make([]types.MarketItem, n)
	for i := range items {
		items[i].Id = keeper.AppendMarketItem(ctx, items[i])
	}
	return items
}

func TestMarketItemGet(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMarketItem(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetMarketItem(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestMarketItemRemove(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMarketItem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMarketItem(ctx, item.Id)
		_, found := keeper.GetMarketItem(ctx, item.Id)
		require.False(t, found)
	}
}

func TestMarketItemGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMarketItem(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllMarketItem(ctx))
}

func TestMarketItemCount(t *testing.T) {
	keeper, ctx := keepertest.MarketKeeper(t)
	items := createNMarketItem(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetMarketItemCount(ctx))
}
