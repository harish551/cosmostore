package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgMintItem{}

func NewMsgMintItem(creator string, name string, description string) *MsgMintItem {
	return &MsgMintItem{
		Creator:     creator,
		Name:        name,
		Description: description,
	}
}

func (msg *MsgMintItem) Route() string {
	return RouterKey
}

func (msg *MsgMintItem) Type() string {
	return "MintItem"
}

func (msg *MsgMintItem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintItem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintItem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
