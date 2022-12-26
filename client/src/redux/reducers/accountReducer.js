import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

export const authSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		hydrate: (state, action) => {
			return action.payload;
		},
		resetAccountState: (state) => {
			state.user = initialState.user;
		},
		setLogged: (state, {payload}) => {
			state.user = payload;
		},
		setAvatar: (state, {payload}) => {
			if (state.user) {
				state.user.avatar = payload;
			}
		},
	},
});

export const {
	resetAccountState,
	setLogged,
	setAvatar,
	hydrate,
} = authSlice.actions;

export default authSlice.reducer;
