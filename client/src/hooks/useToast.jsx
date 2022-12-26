import clsx from 'clsx';
import {createContext, useContext, useState} from 'react';
import Toast from '../components/Toast/Toast';
import {positionClasses} from '../utils/ToastUtils';

const ToastContext = createContext({
	add: () => {},
	remove: () => {},
	position: 'topRight',
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({children}) => {
	const [toasts, setToasts] = useState([]);
	const [position, setPosition] = useState('topRight');

	const add = (toast) => {
		//first check for position
		if (toast.position && toast.position !== position) {
			setPosition(toast.position);
		}

		// add it to the list
		setToasts((toasts) => [
			...toasts,
			{...toast, id: Math.random() * 10000},
		]);
	};

	const remove = (toastId, ref) => {
		// remove it from the list
		setToasts((toasts) =>
			toasts.filter((toast) => toast.id !== toastId)
		);

		// remove from DOM
		ref.current?.classList.add('remove');
		setTimeout(() => {
			ref.current?.remove();
		}, 500);
	};

	return (
		<div className="">
			<ToastContext.Provider
				value={{add, remove, position}}>
				{children}
				{/* toast list */}
				<div
					className={clsx(
						positionClasses[position],
						'fixed w-screen max-w-xs z-50'
					)}>
					{toasts.map((toast) => (
						<Toast key={toast.id} {...toast} />
					))}
				</div>
			</ToastContext.Provider>
		</div>
	);
};
