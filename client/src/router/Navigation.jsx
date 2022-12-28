import React from 'react';
import {Route, Routes} from 'react-router-dom';
import routes from './routes';
import {map} from 'lodash';

export default function Navigation() {
	return (
		<Routes>
			{map(routes, (route, index) => (
				<Route key={index} path="/" element={route.layout}>
					<Route {...route} />
				</Route>
			))}
		</Routes>
	);
}
