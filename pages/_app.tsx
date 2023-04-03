import type { AppProps } from 'next/app'
import '@unocss/reset/tailwind.css'
import 'uno.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
  <>

<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>


  
 
  <Component {...pageProps} />

  </>

  )
}


