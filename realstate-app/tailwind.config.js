const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)"],
  			mono: ["var(--font-mono)"]
  		},
  		colors: {
  			text: {
  				'50': '#080e12',
  				'100': '#0f1b24',
  				'200': '#1f3647',
  				'300': '#2e526b',
  				'400': '#3d6d8f',
  				'500': '#4d88b3',
  				'600': '#70a0c2',
  				'700': '#94b8d1',
  				'800': '#b8cfe0',
  				'900': '#dbe7f0',
  				'950': '#edf3f7'
  			},
  			background: 'hsl(var(--background))',
  			primary: {
  				'50': '#080e11',
  				'100': '#101c23',
  				'200': '#203946',
  				'300': '#305569',
  				'400': '#40718c',
  				'500': '#508eaf',
  				'600': '#73a4bf',
  				'700': '#96bbcf',
  				'800': '#b9d2df',
  				'900': '#dce8ef',
  				'950': '#eef4f7',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#080811',
  				'100': '#101123',
  				'200': '#212145',
  				'300': '#313268',
  				'400': '#41438b',
  				'500': '#5253ad',
  				'600': '#7476be',
  				'700': '#9798ce',
  				'800': '#babade',
  				'900': '#dcddef',
  				'950': '#eeeef7',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#0b0811',
  				'100': '#161023',
  				'200': '#2b2046',
  				'300': '#413069',
  				'400': '#57408c',
  				'500': '#6d50af',
  				'600': '#8a73bf',
  				'700': '#a796cf',
  				'800': '#c4b9df',
  				'900': '#e2dcef',
  				'950': '#f0eef7',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
};
