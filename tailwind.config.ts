import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brunoColor': {
        '50': '#fffbec',
        '100': '#fff5d3',
        '200': '#ffe8a5',
        '300': '#ffd66d',
        '400': '#ffb832',
        '500': '#ffa00a',
        '600': '#ff8800',
        '700': '#cc6402',
        '800': '#a14d0b',
        '900': '#82410c',
        '950': '#461f04',
    },
    'lunaColor': {
        '50': '#fef1f9',
        '100': '#fee5f4',
        '200': '#ffccec',
        '300': '#ffa1db',
        '400': '#ff66c0',
        '500': '#fb39a4',
        '600': '#eb1782',
        '700': '#cd0966',
        '800': '#a90b54',
        '900': '#8d0e49',
        '950': '#570028',
    },
    'brownieColor': {
        '50': '#ffffe6',
        '100': '#fdffbd',
        '200': '#ffff7e',
        '300': '#fff635',
        '400': '#ffe700',
        '500': '#ffcc00',
        '600': '#de9c00',
        '700': '#b06e00',
        '800': '#915502',
        '900': '#7a4509',
        '950': '#572a00',
    },
    
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ],
};
export default config;