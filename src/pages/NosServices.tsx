import Head from 'next/head'
import { Inter } from 'next/font/google'
import NosServicesBody from '@/component/présentation'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Terieur père & fils</title>
        <meta name="description" content="Terieur Creation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TerieurLogo.ico" />
      </Head>
      <main>
        <NosServicesBody/>
      </main>
    </>
  )
}