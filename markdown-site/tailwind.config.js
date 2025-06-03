// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md}',
  ],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code': {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.pink.600'),
              padding: '0.25rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'pre': {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              lineHeight: '1.6',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              borderLeftColor: theme('colors.blue.500'),
              backgroundColor: theme('colors.blue.50'),
              paddingLeft: theme('spacing.4'),
              paddingTop: theme('spacing.2'),
              paddingBottom: theme('spacing.2'),
              borderRadius: theme('borderRadius.lg'),
            },
          },
        },
      }),
    },
  },
};
