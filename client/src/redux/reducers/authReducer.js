import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	authenticated: false,
	access_token: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		hydrate: (_state, action) => {
			return action.payload;
		},
		login: (state, {payload}) => {
			state.authenticated = true;
			state.access_token = payload.access_token;
		},
		logout: (state) => {
			state.authenticated = false;
			state.access_token = '';
		},
	},
});

export const {login, logout, hydrate} = authSlice.actions;

export default authSlice.reducer;
