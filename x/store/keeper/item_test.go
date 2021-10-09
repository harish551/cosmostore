package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/store/keeper"
	"github.com/harish551/cosmostore/x/store/types"
	"github.com/stretchr/testify/require"
)

func createNItem(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Item {
	items := make([]types.Item, n)
	for i := range items {
		items[i].Id = keeper.AppendItem(ctx, items[i])
	}
	return items
}

func TestItemGet(t *testing.T) {
	keeper, ctx := keepertest.StoreKeeper(t)
	items := createNItem(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetItem(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestItemRemove(t *testing.T) {
	keeper, ctx := keepertest.StoreKeeper(t)
	items := createNItem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveItem(ctx, item.Id)
		_, found := keeper.GetItem(ctx, item.Id)
		require.False(t, found)
	}
}

func TestItemGetAll(t *testing.T) {
	keeper, ctx := keepertest.StoreKeeper(t)
	items := createNItem(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllItem(ctx))
}

func TestItemCount(t *testing.T) {
	keeper, ctx := keepertest.StoreKeeper(t)
	items := createNItem(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetItemCount(ctx))
}
