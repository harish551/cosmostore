package cosmostore_test

import (
	"testing"

	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/cosmostore"
	"github.com/harish551/cosmostore/x/cosmostore/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CosmostoreKeeper(t)
	cosmostore.InitGenesis(ctx, *k, genesisState)
	got := cosmostore.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
