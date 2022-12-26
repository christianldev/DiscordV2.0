// import IconLight from '../../assets/img/icon-light.png';
// import IconDark from '../../assets/img/icon-dark.png';
import {useSelector} from 'react-redux';

import classNames from '../../utils/ClassesUtils';

export default function Icon({
	className = '',
	size = 'h-9',
}) {
	const theme = useSelector((state) => state.theme?.value);
	return (
		<div className={className}>
			{(() => {
				if (theme === 'DARK') {
					return (
						// <img
						// 	className={classNames(size, 'w-auto mx-auto')}
						// 	src={IconDark}
						// 	alt="Logo"
						// />
						<svg
							className={classNames(size, 'w-auto mx-auto')}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path
								fill="currentColor"
								d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 480c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"
							/>
							<path
								fill="currentColor"
								d="M256 128c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
							/>
							<path
								fill="currentColor"
								d="M256 320c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
							/>
						</svg>
					);
				} else {
					return (
						// <img
						// 	className={classNames(size, 'w-auto mx-auto')}
						// 	src={IconLight}
						// 	alt="Logo"
						// />
						<svg
							className={classNames(size, 'w-auto mx-auto')}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path
								fill="currentColor"
								d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 480c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"
							/>
							<path
								fill="currentColor"
								d="M256 128c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
							/>
							<path
								fill="currentColor"
								d="M256 320c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 128c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z"
							/>
						</svg>
					);
				}
			})()}
		</div>
	);
}
