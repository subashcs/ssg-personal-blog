// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.blue,
				secondary: colors.pink,
			},
			fontFamily: {
				sans: ['Nunito, sans-serif', { fontFeatureSettings: '"cv11", "ss01"' }],
			},
			fontSize: {
				sm: ['14px', '20px'],
				base: ['16px', '24px'],
				lg: ['20px', '28px'],
				xl: ['24px', '32px'],
			},
			animation: {
				type: 'type 12s ease-out 1s infinite alternate both',
			},
			keyframes: {
				type: {
					'0%': { transform: 'translateX(0ch)' },
					'2%, 4%': { transform: 'translateX(1ch)' },
					'4%, 8%': { transform: 'translateX(2ch)' },
					'8%, 12%': { transform: 'translateX(3ch)' },
					'12%, 16%': { transform: 'translateX(4ch)' },
					'16%, 20%': { transform: 'translateX(5ch)' },
					'20%, 24%': { transform: 'translateX(6ch)' },
					'24%, 28%': { transform: 'translateX(7ch)' },
					'28%, 32%': { transform: 'translateX(8ch)' },
					'32%, 36%': { transform: 'translateX(9ch)' },
					'36%, 40%': { transform: 'translateX(10ch)' },
					'40%, 44%': { transform: 'translateX(11ch)' },
					'44%, 48%': { transform: 'translateX(12ch)' },
					'48%, 52%': { transform: 'translateX(13ch)' },
					'52%, 56%': { transform: 'translateX(14ch)' },
					'56%, 60%': { transform: 'translateX(15ch)' },
					'60%, 64%': { transform: 'translateX(16ch)' },
					'64%, 68%': { transform: 'translateX(17ch)' },
					'68%, 72%': { transform: 'translateX(18ch)' },
					'72%, 76%': { transform: 'translateX(19ch)' },
					'76%, 80%': { transform: 'translateX(20ch)' },
					'80%, 84%': { transform: 'translateX(21ch)' },
					'84%, 88%': { transform: 'translateX(22ch)' },
					'88%, 92%': { transform: 'translateX(23ch)' },
					'92%, 96%': { transform: 'translateX(24ch)' },
					'96%, 100%': { transform: 'translateX(25ch)' },
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
