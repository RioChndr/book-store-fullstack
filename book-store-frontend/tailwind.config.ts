import { type Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import headlessuiPlugin from '@headlessui/tailwindcss'
import tailwindFormPlugin from '@tailwindcss/forms';
import svgToDataUri from 'mini-svg-data-uri';
import defaultTheme from 'tailwindcss/defaultTheme'
import { PluginUtils } from 'tailwindcss/types/config';

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

export default {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
  darkMode: 'selector',
  theme: {
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      colors: (theme: PluginUtils) => {
        return {
          primary: theme.colors.blue,
          brand: {
            primary: {
              '50': '#f0f7ff',
              '100': '#e1eefd',
              '200': '#bcdcfb',
              '300': '#80c1f9',
              '400': '#3da1f3',
              '500': '#1384e1',
              '600': '#0768c2',
              '700': '#07539d',
              '800': '#0a4782',
              '900': '#0e3c6c',
              '950': '#0a2647',
            }
          },
          back: {
            light: '#ddeeff',
            dark: '#000d36'
          }
        }
      }
    },
  },
  plugins: [
    typographyPlugin, 
    headlessuiPlugin,
    tailwindFormPlugin,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )

      matchUtilities(
        {
          highlight: (value:any) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
} satisfies Config
