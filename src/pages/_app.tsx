import WithAction from '@/component/Header'
import SmallCentered from '@/component/footer'
import GridListWithHeading from '@/component/présentation'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
          <WithAction></WithAction>
          <Component {...pageProps} />
          <SmallCentered></SmallCentered>      
      </ChakraProvider>
}
