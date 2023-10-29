import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Heading } from '@chakra-ui/react'
import BoutonEquipe from '@/component/AffichageEquipe/Hook'
import Carousel from '@/component/Carousels'
import BodyAccueil from '@/component/AffichageAccueil/Index'
import BoutonProject from '@/component/Realisation/Index'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Terrieur père & fils</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1" textAlign="center" id="Presentation">Terrieur Père & Fils</Heading>
        <BodyAccueil/>
        <BoutonEquipe/>
        <BoutonProject/>
      </main>
    </>
  )
}
