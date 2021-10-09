package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/harish551/cosmostore/x/store/types"
)

// GetItemCount get the total number of item
func (k Keeper) GetItemCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ItemCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetItemCount set the total number of item
func (k Keeper) SetItemCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.ItemCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendItem appends a item in the store with a new id and update the count
func (k Keeper) AppendItem(
	ctx sdk.Context,
	item types.Item,
) uint64 {
	// Create the item
	count := k.GetItemCount(ctx)

	// Set the ID of the appended value
	item.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKey))
	appendedValue := k.cdc.MustMarshal(&item)
	store.Set(GetItemIDBytes(item.Id), appendedValue)

	// Update item count
	k.SetItemCount(ctx, count+1)

	return count
}

// SetItem set a specific item in the store
func (k Keeper) SetItem(ctx sdk.Context, item types.Item) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKey))
	b := k.cdc.MustMarshal(&item)
	store.Set(GetItemIDBytes(item.Id), b)
}

// GetItem returns a item from its id
func (k Keeper) GetItem(ctx sdk.Context, id uint64) (val types.Item, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKey))
	b := store.Get(GetItemIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveItem removes a item from the store
func (k Keeper) RemoveItem(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKey))
	store.Delete(GetItemIDBytes(id))
}

// GetAllItem returns all item
func (k Keeper) GetAllItem(ctx sdk.Context) (list []types.Item) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ItemKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Item
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetItemIDBytes returns the byte representation of the ID
func GetItemIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetItemIDFromBytes returns ID in uint64 format from a byte array
func GetItemIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
