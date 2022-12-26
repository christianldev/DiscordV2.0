import {createSlice} from '@reduxjs/toolkit';
import {Theme} from '../../utils/ThemeUtils';

let theme = {value: Theme.LIGHT};
try {
	let local = localStorage.getItem('theme');
	if (Number(local) === 0 || Number(local) === 1) {
		local = {
			value: Number(local),
		};
	}
	theme = JSON.parse(local ?? '{}') ?? {
		value: Theme.LIGHT,
	};
} catch {
	//
}
const initialState = theme;

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		hydrate: (state, action) => {
			// do not do state = action.payload it will not update the store
			return action.payload;
		},
		setTheme: (state, {payload}) => {
			state.value = payload;
			localStorage.setItem(
				'theme',
				JSON.stringify(state.value)
			);
		},
	},
});

export const {setTheme, hydrate} = themeSlice.actions;

export default themeSlice.reducer;
