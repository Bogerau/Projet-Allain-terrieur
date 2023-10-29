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
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
  
}

const Card = ({ heading, description, icon, href }: CardProps) => {
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
          bg={useColorModeValue('gray.100', 'gray.700')}>
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

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={4} justify="center">
          <Card
            heading={'Décoration intérieur pour appartement'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'La décoration de votre appartement ne vous plait plus nous nous occupons de tout, du devis à la réalisation ? '}
            href={'#'}
          />
          <Card
            heading={'Décoration intérieur pour maison'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'La décoration de votre maison ne vous plait plus nous nous occupons de tout, du devis à la réalisation ?'}
            href={'#'}
          />
          <Card
            heading={'Plan de construction pour maison sur mesure'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Vous souhaitez acheter un terrain afin de construire votre maison ? Notre équipe experte dans le domaine vous accompagne de la confection des plans à la réalisation.'}
            href={'#'}
          />
          <Card
            heading={'Aménagement extérieur de maison'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'La décoration intérieur est très importante mais nous pouvons également vous accompagner dans la création de terrasse, aménagement de jardin etc...'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}