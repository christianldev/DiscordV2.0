import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import {ToastProvider} from './hooks/useToast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<ToastProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ToastProvider>
		</Suspense>
	</React.StrictMode>
);
