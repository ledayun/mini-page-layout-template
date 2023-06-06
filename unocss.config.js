/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'

const remRE = /^-?[.\d]+rem$/

export default defineConfig(
  {
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
