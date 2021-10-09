package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBuyItem{}

func NewMsgBuyItem(creator string, id string, price sdk.Coins) *MsgBuyItem {
	return &MsgBuyItem{
		Creator: creator,
		Id:      id,
		Price:   price,
	}
}

func (msg *MsgBuyItem) Route() string {
	return RouterKey
}

func (msg *MsgBuyItem) Type() string {
	return "BuyItem"
}

func (msg *MsgBuyItem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyItem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyItem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
