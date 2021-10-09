package keeper

import (
	"github.com/harish551/cosmostore/x/market/types"
)

var _ types.QueryServer = Keeper{}
