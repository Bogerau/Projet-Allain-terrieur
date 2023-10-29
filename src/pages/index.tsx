import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, Heading } from '@chakra-ui/react'
import BoutonEquipe from '@/component/AffichageEquipe/Hook'
import Carousel from '@/component/Carousels'
import BodyAccueil from '@/component/AffichageAccueil/Index'
import BoutonProject from '@/component/Realisation/Index'
import ReseauxSociaux from '@/component/Reseaux/Index'



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
        <Heading as="h1" textAlign="center" id="Presentation">Terieur Père & Fils</Heading>
        <BodyAccueil/>
        <BoutonEquipe/>
        <BoutonProject/>
        <ReseauxSociaux/>
      </main>
    </>
  )
}
