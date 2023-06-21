/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

const remRE = /^-?[.\d]+rem$/

export default defineConfig(
  {
    rules: [
      [/^w-p(\d+)$/, ([, d]) => ({ width: `${d}%` })],
      [/^h-p(\d+)$/, ([, d]) => ({ height: `${d}%` })],
    ],
    presets: [
      presetIcons({
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetUno(),
    ],
    theme: {
      // 解决小程序不支持 * 选择器
      preflightRoot: ['page,::before,::after'],
      fontSize: {
        xs: '0.5rem', // 10
        sm: '0.75rem', // 12
        base: '0.875rem', // 14
        lg: '1rem', // 16
        xl: '1.125rem', // 18
      },
    },
    postprocess(util) {
      // 自定义rem 转 rpx
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === 'string' && remRE.test(value)) {
          // eslint-disable-next-line no-param-reassign
          i[1] = `${value.slice(0, -3) * 16 * 2}rpx`
        }
      })
    },
  },
)
