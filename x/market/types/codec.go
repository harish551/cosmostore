package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgListItem{}, "market/ListItem", nil)
	cdc.RegisterConcrete(&MsgDelistItem{}, "market/DelistItem", nil)
	cdc.RegisterConcrete(&MsgBuyItem{}, "market/BuyItem", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgListItem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDelistItem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyItem{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
