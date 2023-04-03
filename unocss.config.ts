import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts  , transformerDirectives } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'




export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
   
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn2', '  bg-green-600 text-white cursor-pointer text-4xl hover:bg-green-']
  ],

  // -----can write css without class
  transformers: [
    transformerAttributifyJsx(),
    //  transformerDirectives(),
    

     transformerDirectives({
      applyVariable: ['--uno' , '@apply'],
    })



// @apply screens themes 
// transformerDirectives({

//    applyVariable: ['--at-apply', '--uno-apply', '--uno' , '@apply' , '@screen'],

//  })

  ],


 


})



