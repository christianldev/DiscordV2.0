/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			md: '800px',
			lg: '1024px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				lg: '2rem',
			},
		},
		extend: {
			backgroundColor: {
				firstColor: 'hsl(244, 75%, 57%)',
				secondColor: 'hsl(208, 93%, 95%)',
				yellow: 'hsl(48, 100%, 67%)',
				blue: 'hsl(198, 62%, 26%)',
				black: 'hsl(0, 0%, 0%)',
				white: 'hsl(0, 0%, 100%)',
				gray: 'hsl(0, 0%, 75%)',
				lightBlurColor: 'hsla(244, 16%, 92%, 0.6)',
				blackBlurColor: 'hsla(235, 55%, 13%, 0.6)',
			},
			textColor: {
				firstColor: 'hsl(244, 75%, 57%)',
				secondColor: 'hsl(208, 93%, 95%)',
				yellow: 'hsl(48, 100%, 67%)',
				blue: 'hsl(198, 62%, 26%)',
				black: 'hsl(0, 0%, 0%)',
				white: 'hsl(0, 0%, 100%)',
				gray: 'hsl(0, 0%, 75%)',
			},
			backgroundImage: {
				login: "url('/src/assets/img/login_bg.svg')",
			},
			fontFamily: {
				body: ['Helvetica'],
			},
			colors: {
				black: '#1D1D24',
				grey: '#EEEEF3',
				blue: '#0000ff',
			},
			fontSize: {
				base: '1.5rem',
				'base--mobile': '1rem',
				xs: '0.75rem',
				sm: '1rem',
				md: '1.125rem',
				lg: '1.25rem',
				xl: '1.625rem',
				'2xl': '2rem',
				'2.5xl': '2.25rem',
				'3xl': '2.375rem',
				'4xl': '3.875rem',
				'5xl': '6.25rem',
			},
			lineHeight: {
				tight: '1.05',
				snug: '1.4',
			},
			letterSpacing: {
				tight: '-0.03em',
			},
			spacing: {
				26: '6.5rem',
			},
			animation: {
				toastIn: 'toastIn .8s both',
				toastOut: 'toastOut .8s both',
			},
			keyframes: {
				toastIn: {
					'0%': {
						transform: 'var(--elm-translate) scale(0.7)',
						opacity: 0.7,
					},
					'80%': {
						transform: 'translate(0px) scale(0.7)',
						opacity: 0.7,
					},
					'100%': {transform: 'scale(1)', opacity: 1},
				},
				toastOut: {
					'0%': {transform: 'scale(1)', opacity: 1},
					'20%': {
						transform: 'translate(0px) scale(0.7)',
						opacity: 0.7,
					},
					'100%': {
						transform: 'var(--elm-translate) scale(0.7)',
						opacity: 0.7,
					},
				},
			},
		},
	},
	plugins: [],
};
