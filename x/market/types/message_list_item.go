package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgListItem{}

func NewMsgListItem(creator string, itemID string, price sdk.Coins) *MsgListItem {
	return &MsgListItem{
		Creator: creator,
		ItemID:  itemID,
		Price:   price,
	}
}

func (msg *MsgListItem) Route() string {
	return RouterKey
}

func (msg *MsgListItem) Type() string {
	return "ListItem"
}

func (msg *MsgListItem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgListItem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgListItem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
