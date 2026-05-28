import { ChakraProvider } from '@chakra-ui/react'
import '../styles/global.scss'
import '../styles/mobile.scss'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
