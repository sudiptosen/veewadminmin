const {fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'class'], // or 'media' or 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			alternate: '#29384D',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			tertiary: 'var(--tertiary-color)',
  			paper: '#F2F2F2',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		textColor: {
  			'primary-dark': 'rgba(255,255,255, 0.8)',
  			'secondary-dark': 'rgba(255,255,255, 0.6)',
  			'tertiary-dark': 'rgba(255,255,255, 0.4)',
  			'primary-light': 'rgba(0,0,0, 0.5)',
  			'secondary-light': 'rgba(0,0,0, 0.6)',
  			'tertiary-light': 'rgba(0,0,0, 0.4)',
  			accent: 'rgba(133,243,237, 1)',
  			danger: 'rgba(232,72,85, 1)',
  			'app-color': 'rgba(36,92,132, 1)'
  		},
  		textDecorationThickness: {
  			'1/2': '0.5px'
  		},
  		textUnderlineOffset: {
  			'3': '3px'
  		},
  		fontWeight: {
  			'xx-light': 100
  		},
  		borderWidth: {
  			'1': '1px',
  			'1/2': '0.5px'
  		},
  		backgroundImage: {
  			'bottom-wave': 'url("/images/bottom_wave.svg")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'circle-1': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(10%, 10%) scale(1.1)'
  				}
  			},
  			'circle-2': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-10%, -10%) scale(1.2)'
  				}
  			},
  			'circle-3': {
  				'0%, 100%': {
  					transform: 'translate(-50%, -50%) scale(1)'
  				},
  				'50%': {
  					transform: 'translate(-45%, -45%) scale(1.1)'
  				}
  			}
  		},
  		animation: {
  			'circle-1': 'circle-1 20s ease-in-out infinite',
  			'circle-2': 'circle-2 25s ease-in-out infinite',
  			'circle-3': 'circle-3 30s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
