package store_test

import (
	"testing"

	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/store"
	"github.com/harish551/cosmostore/x/store/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		ItemList: []types.Item{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ItemCount: 2,
		MarketItemList: []types.MarketItem{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MarketItemCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.StoreKeeper(t)
	store.InitGenesis(ctx, *k, genesisState)
	got := store.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.ItemList, len(genesisState.ItemList))
	require.Subset(t, genesisState.ItemList, got.ItemList)
	require.Equal(t, genesisState.ItemCount, got.ItemCount)
	require.Len(t, got.MarketItemList, len(genesisState.MarketItemList))
	require.Subset(t, genesisState.MarketItemList, got.MarketItemList)
	require.Equal(t, genesisState.MarketItemCount, got.MarketItemCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
