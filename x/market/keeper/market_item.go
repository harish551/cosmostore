package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/market/types"
)

// GetMarketItemCount get the total number of marketItem
func (k Keeper) GetMarketItemCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MarketItemCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetMarketItemCount set the total number of marketItem
func (k Keeper) SetMarketItemCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MarketItemCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendMarketItem appends a marketItem in the store with a new id and update the count
func (k Keeper) AppendMarketItem(
	ctx sdk.Context,
	marketItem types.MarketItem,
) uint64 {
	// Create the marketItem
	count := k.GetMarketItemCount(ctx)

	// Set the ID of the appended value
	marketItem.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketItemKey))
	appendedValue := k.cdc.MustMarshal(&marketItem)
	store.Set(GetMarketItemIDBytes(marketItem.Id), appendedValue)

	// Update marketItem count
	k.SetMarketItemCount(ctx, count+1)

	return count
}

// SetMarketItem set a specific marketItem in the store
func (k Keeper) SetMarketItem(ctx sdk.Context, marketItem types.MarketItem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketItemKey))
	b := k.cdc.MustMarshal(&marketItem)
	store.Set(GetMarketItemIDBytes(marketItem.Id), b)
}

// GetMarketItem returns a marketItem from its id
func (k Keeper) GetMarketItem(ctx sdk.Context, id uint64) (val types.MarketItem, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketItemKey))
	b := store.Get(GetMarketItemIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMarketItem removes a marketItem from the store
func (k Keeper) RemoveMarketItem(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketItemKey))
	store.Delete(GetMarketItemIDBytes(id))
}

// GetAllMarketItem returns all marketItem
func (k Keeper) GetAllMarketItem(ctx sdk.Context) (list []types.MarketItem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MarketItemKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MarketItem
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMarketItemIDBytes returns the byte representation of the ID
func GetMarketItemIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMarketItemIDFromBytes returns ID in uint64 format from a byte array
func GetMarketItemIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
