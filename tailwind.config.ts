import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'], 
        'merriweather': ['Merriweather', 'serif'],
        'audiowide': ['Audiowide', 'sans-serif'], 
      },
      letterSpacing: {
        tight: '0.1em',
        normal: '0.19em',
        wide: '0.15em',
      },
      lineHeight: {
        normal: '2.0',
        relaxed: '2.4',
        loose: '2.8',
      },
    },
  },
  plugins: [],
} satisfies Config;