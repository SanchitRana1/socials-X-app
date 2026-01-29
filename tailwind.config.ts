import type { Config } from 'tailwindcss';

export default {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			// colors: {
			// 	background: 'var(--background)',
			// 	foreground: 'var(--foreground)',
			// },
			screens: {
				xs: '500px',
				sm: '600px',
				md: '690px',
				lg: '1000px',
				xl: '1078px',
				xxl: '1265px'
			},
			colors: {
				textGray: '#71767b',
				textGrayLight: '#e7e9ea',
				borderGray: '#2f3336',
				inputGray: '#202327',
				iconBlue: '#1d9bf0',
				iconPink: '#f91880',
				iconGreen: '#00ba7c'
			}
		}
	},
	plugins: []
} satisfies Config;
