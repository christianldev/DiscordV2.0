import {lazy, useEffect} from 'react';
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import {Theme} from './utils/ThemeUtils';
import {useSelector} from 'react-redux';
import {Login} from './pages/Login';
import Register from './pages/Register';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import PrivateRoute from './router/PrivateRoute';
import {Toaster} from 'react-hot-toast';
import NotFound from './pages/NotFound';
import Friends from './pages/Friends';
import InitialDashboard from './components/InitialDashboard/InitialDashboard';
import Navigation from './router/Navigation';

const Landing = lazy(() => import('./pages/Landing'));

function App() {
	const theme = useSelector((state) => state.theme.value);
	const authenticated = useSelector(
		(state) => state.auth.authenticated
	);

	useEffect(() => {
		const htmlClasses =
			document.querySelector('html')?.classList;
		if (theme === Theme.LIGHT) {
			htmlClasses?.remove('dark');
		} else {
			htmlClasses?.add('dark');
		}
	}, [theme]);

	return (
		<BrowserRouter>
			<Toaster />
			<Routes>
				{!authenticated && (
					<Route path="/">
						<Route index element={<Landing />} />
						<>
							<Route path="login" element={<Login />} />
							<Route
								path="register"
								element={<Register />}
							/>
						</>
					</Route>
				)}
			</Routes>
			{authenticated && (
				<PrivateRoute>
					<Navigation />
				</PrivateRoute>
			)}
		</BrowserRouter>
	);
}

export default App;
