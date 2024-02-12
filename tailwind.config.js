import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.jsx'],
  theme: {
    colors: {
      neutral: {
        100: '#ffffff',
        200: '#fafafa',
        300: '#f1f1f1',
        400: '#4c4c4c',
        500: '#101010',
        550: '#000000'
      },
      primary: {
        50: '#fbaf85',
        100: '#d87d4a'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Manrope Variable', 'sans-serif']
      },
      fontSize: {
        xs: ['0.8125rem', '1'],
        sm: ['0.875rem', '1'],
        base: ['0.9375rem', '1.5625rem'],
        '3xl': ['1.75rem', '1'],
        '6xl': ['3.5rem', '3.625rem']
      },
      letterSpacing: {
        wide: '0.036em',
        wider: '0.0625rem',
        widest: '0.625rem'
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        87: '21.75rem',
        277.5: '69.375rem'
      }
    }
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.circles-pattern': {
          backgroundImage: "url('/images/circles.svg')",
          backgroundPosition: 'center -7.5rem',
          backgroundSize: '34.875rem',
          backgroundRepeat: 'no-repeat'
        }
      })
    })
  ]
}
