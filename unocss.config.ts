import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

// @apply screens theme add libary
import transformerDirectives from '@unocss/transformer-directives'


// import initUnocssRuntime from '@unocss/runtime'

// initUnocssRuntime({ /* options */ })



export default defineConfig({
  presets: [
    presetAttributify(),
  
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
    presetUno(),
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn2', '  bg-green-600 text-white cursor-pointer text-4xl hover:bg-green-']
  ],

  // -----can write css without class
  transformers: [
    transformerAttributifyJsx(),
    transformerDirectives(),
  ],


 


})













// unocss.config.ts
// import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

// export default defineConfig({
//   presets: [
//     presetUno(),
//     // ...
//   ],
// })