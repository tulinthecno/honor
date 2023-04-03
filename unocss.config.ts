// unocss.config.ts
// import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

// export default defineConfig({
//   presets: [
//     presetUno(),
//     // ...
//   ],
// })



import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  shortcuts: [
    ['flex-c', 'flex items-center justify-center'],
    ['h-fs', 'h-[calc(100vh-40px)]'],
    [
      'btn',
      'px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 dark:border-purple-800 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40 cursor-pointer text-center',
    ],
  ],
  theme: {
    colors: {
      brand: {
        primary: '#9333ea', // used like bg-brand-primary
        light: '#80eec0', // used like bg-brand-light
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})