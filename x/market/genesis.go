package market

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/market/keeper"
	"github.com/harish551/cosmostore/x/market/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the marketItem
	for _, elem := range genState.MarketItemList {
		k.SetMarketItem(ctx, elem)
	}

	// Set marketItem count
	k.SetMarketItemCount(ctx, genState.MarketItemCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.MarketItemList = k.GetAllMarketItem(ctx)
	genesis.MarketItemCount = k.GetMarketItemCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
