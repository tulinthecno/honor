import type { AppProps } from 'next/app'
 import '../styles/global.css'
// import '@unocss/reset/tailwind.css'
import 'uno.css'

import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
 import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
 import '@unocss/reset/tailwind-compat.css'
 import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
  <>

<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>


  
 
  <Component {...pageProps} />

  </>

  )
}


