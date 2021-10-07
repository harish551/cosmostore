package keeper

import (
	"github.com/harish551/cosmostore/x/cosmostore/types"
)

var _ types.QueryServer = Keeper{}
