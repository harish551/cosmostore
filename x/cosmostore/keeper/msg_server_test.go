package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/harish551/cosmostore/testutil/keeper"
	"github.com/harish551/cosmostore/x/cosmostore/keeper"
	"github.com/harish551/cosmostore/x/cosmostore/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CosmostoreKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
