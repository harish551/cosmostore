package market_test

import (
	"testing"

	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/market"
	"github.com/harish551/cosmostore/x/market/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
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

	k, ctx := keepertest.MarketKeeper(t)
	market.InitGenesis(ctx, *k, genesisState)
	got := market.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.MarketItemList, len(genesisState.MarketItemList))
	require.Subset(t, genesisState.MarketItemList, got.MarketItemList)
	require.Equal(t, genesisState.MarketItemCount, got.MarketItemCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
