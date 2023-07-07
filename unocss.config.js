/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import {
  presetApplet,
  presetRemRpx,
} from 'unocss-applet'

export default defineConfig(
  {
    rules: [
      [/^w-p(\d+)$/, ([, d]) => ({ width: `${d}%` })],
      [/^h-p(\d+)$/, ([, d]) => ({ height: `${d}%` })],
      [/^p-p(\d+)$/, ([, d]) => ({ padding: `${d}%` })],
      [/^pl-p(\d+)$/, ([, d]) => ({ 'padding-left': `${d}%` })],
      [/^pr-p(\d+)$/, ([, d]) => ({ 'padding-right': `${d}%` })],
      [/^pt-p(\d+)$/, ([, d]) => ({ 'padding-top': `${d}%` })],
      [/^pb-p(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}%` })],
      [/^px-p(\d+)$/, ([, d]) => ({
        'padding-left': `${d}%`,
        'padding-right': `${d}%`,
      })],
      [/^py-p(\d+)$/, ([, d]) => ({
        'padding-top': `${d}%`,
        'padding-bottom': `${d}%`,
      })],
    ],
    presets: [
      presetIcons({
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetApplet(),
      presetRemRpx(),
    ],
    theme: {
      fontSize: {
        xs: '0.5rem', // 10
        sm: '0.75rem', // 12
        base: '0.875rem', // 14
        lg: '1rem', // 16
        xl: '1.125rem', // 18
      },
    },
  },
)
