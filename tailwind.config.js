/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
			'body': ['Roboto', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
		}
  },
  plugins: [],
}
