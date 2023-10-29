'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { 
  ReactElement 
} from 'react'

import{
  FaUtensils,
  FaTree,
  FaBed,
  FaHome,
  FaSeedling,
  FaLightbulb,
  FaRoad,
  FaWater, 
} from 'react-icons/fa'

import { 
  Link,
} from "react-router-dom"

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
  
}

const Card = ({ heading, description, icon}: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('black', 'black')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Nous contacter
        </Button>
      </Stack>
    </Box>
  )
}

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Nos Services
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Terieur Père & Fils vous propose de nombreuses préstations de décoration d'intérieur et d'éxtérieur. 
          Retrouvez les détails de ces dernières ci-dessous.
        </Text>
      </Stack>

      <Container maxW={'7xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={4} justify="center">
  <Card
    heading={'Décoration intérieur pour appartement'}
    icon={<FaHome size={40} />}
    description={'La décoration de votre appartement ne vous plait plus nous nous occupons de tout, du devis à la réalisation.'}
    href={'/contact'}
/>  <link href="/contact" />
<Card
    heading={'Rénovation de cuisine'}
    icon={<FaUtensils size={40} />}
    description={'Donnez un nouveau souffle à votre cuisine. De la planification à linstallation, nous sommes à vos côtés.'}
    href={'#'}
/>
<Card
    heading={'Aménagement extérieur'}
    icon={<FaTree size={40} />}
    description={'Transformez votre espace extérieur en un oasis de détente. Nous vous aidons à créer lespace de vos rêves.'}
    href={'#'}
/>
<Card
    heading={'Relooking de chambre'}
    icon={<FaBed size={40} />}
    description={'Rafraîchissez votre espace de repos avec des designs modernes et confortables.'}
    href={'/'}
/>
<Card
    heading={'Aménagement Paysager'}
    icon={<FaSeedling size={40} />}
    description={'Créez un jardin à couper le souffle avec notre expertise en aménagement paysager.'}
    href={'#'}
/>
<Card
    heading={'Éclairage Extérieur'}
    icon={<FaLightbulb size={40} />}
    description={'Illuminez votre espace extérieur pour des soirées magiques.'}
    href={'#'}
/>
<Card
    heading={'Allées & Chemins'}
    icon={<FaRoad size={40} />}
    description={'Améliorez l accès et le look de votre propriété avec des allées et des chemins rénovés.'}
    href={'#'}
/>
<Card
    heading={'Fontaines & Bassins'}
    icon={<FaWater size={40} />}
    description={'Ajoutez une touche de sérénité à votre jardin avec des fontaines et bassins.'}
    href={'#'}
/>
        </Flex>
      </Container>
    </Box>
  )
}