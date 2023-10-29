import HeaderBar from '@/component/Header'
import FooterBar from '@/component/footer'
import GridListWithHeading from '@/component/présentation'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
          <HeaderBar/>
          <Component {...pageProps} />
          <FooterBar/>    
      </ChakraProvider>
}
