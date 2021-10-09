package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ItemList: []Item{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in item
	itemIdMap := make(map[uint64]bool)
	itemCount := gs.GetItemCount()
	for _, elem := range gs.ItemList {
		if _, ok := itemIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for item")
		}
		if elem.Id >= itemCount {
			return fmt.Errorf("item id should be lower or equal than the last id")
		}
		itemIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
