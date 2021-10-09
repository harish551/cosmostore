package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/harish551/cosmostore/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgDelistItem_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDelistItem
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDelistItem{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDelistItem{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
