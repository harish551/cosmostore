package keeper

import (
	"github.com/harish551/cosmostore/x/store/types"
)

var _ types.QueryServer = Keeper{}
