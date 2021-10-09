package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		MarketItemList: []MarketItem{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in marketItem
	marketItemIdMap := make(map[uint64]bool)
	marketItemCount := gs.GetMarketItemCount()
	for _, elem := range gs.MarketItemList {
		if _, ok := marketItemIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for marketItem")
		}
		if elem.Id >= marketItemCount {
			return fmt.Errorf("marketItem id should be lower or equal than the last id")
		}
		marketItemIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
