/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        base: '1.125rem'
      },
      colors: {
        primary: {
          DarkBlue: 'hsl(233, 26%, 24%)',
          LimeGreen: 'hsl(136, 65%, 51%)',
          BrightCyan: 'hsl(192, 70%, 51%)'
        },
        neutral: {
          GrayishBlue: 'hsl(233, 8%, 62%)',
          LightGrayishBlue: 'hsl(220, 16%, 96%)',
          VeryLightGray: 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)'
        }
      },
      backgroundImage: {
        primaryGradient:
          'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))'
      }
    }
  },
  plugins: []
}
