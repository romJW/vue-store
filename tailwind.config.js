module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `library/**/*.{vue,js,ts}`,
    `plugins/**/*.{js,ts}`,
  ],
  theme: {
    screens: {
      'sm':  '640px',  // => @media (min-width: 640px) { ... }
      'md':  '768px',  // => @media (min-width: 768px) { ... }
      'lg':  '1024px', // => @media (min-width: 1024px) { ... }
      'xl':  '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
