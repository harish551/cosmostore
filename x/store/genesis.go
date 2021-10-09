package store

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/store/keeper"
	"github.com/harish551/cosmostore/x/store/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the item
	for _, elem := range genState.ItemList {
		k.SetItem(ctx, elem)
	}

	// Set item count
	k.SetItemCount(ctx, genState.ItemCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.ItemList = k.GetAllItem(ctx)
	genesis.ItemCount = k.GetItemCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
