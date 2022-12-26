import {useSelector} from 'react-redux';
import {setTheme} from '../../redux/reducers/themeReducer';
import store from '../../redux/store';
import {Theme} from '../../utils/ThemeUtils';

export default function DarkModeToggle() {
	const theme = useSelector((state) => state.theme.value);

	const toggle = () => {
		const htmlClasses =
			document.querySelector('html')?.classList;
		if (theme === Theme.DARK) {
			store.dispatch(setTheme(Theme.LIGHT));
			htmlClasses?.remove('dark');
		} else {
			store.dispatch(setTheme(Theme.DARK));
			htmlClasses?.add('dark');
		}
	};
	return (
		<button
			onClick={toggle}
			className="dark-mode-switcher cursor-pointer shadow-md bg-lightBlurColor dark:bg-blackBlurColor fixed bottom-0 right-0 box border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
			<div className="mr-4 text-xs text-firstColor  dark:text-white">
				Dark Mode
			</div>
			<div
				id="btn"
				className="cursor-pointer p-2 rounded-full  bg-black">
				{theme === Theme.DARK ? (
					<div id="sun">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-yellow "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
				) : (
					<div id="moon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-white"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					</div>
				)}
			</div>
		</button>
	);
}
