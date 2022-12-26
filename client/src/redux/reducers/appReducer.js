import {createSlice} from '@reduxjs/toolkit';
import {ApplicationLayout} from '../../utils/ApplicationLayout';

const initialState = {
	usage: {
		type: 0,
		providers: 0,
		providersInCompliance: 0,
		clients: 0,
		contracts: 0,
		employees: 0,
		storage: 0,
		pendingInvitations: 0,
	},
	features: {
		maxUsers: 1,
		maxWorkspaces: 1,
		maxLinks: 1,
		maxStorage: 1,
		monthlyContracts: 1,
	},
	layout: ApplicationLayout.SIDEBAR,
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		hydrate: (state, action) => {
			return action.payload;
		},
		resetAppState: (state) => {
			state.usage = initialState.usage;
			state.features = initialState.features;
		},
		setLayout: (state, {payload}) => {
			state.layout = payload;
		},
		setFeatures(state, {payload}) {
			state.features = payload;
		},
	},
});

export const {
	resetAppState,
	setLayout,
	setFeatures,
	hydrate,
} = appSlice.actions;

export default appSlice.reducer;
