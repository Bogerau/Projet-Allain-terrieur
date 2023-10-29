'use client'

import {
  Button,
  Center,
  Container,
  HStack,
  Text,
} from '@chakra-ui/react'

import { Heading, VStack } from "@chakra-ui/react";

export default function ReseauxSociaux(){
    return (
    <Container maxW={'7xl'} p="12">
    <Heading as="h1" id="Reseaux">
    Nos réseaux sociaux
    </Heading>
    <Center>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <HStack spacing={4} alignItems="center">
            <Button
            as="a"
            href="https://www.instagram.com/terieur_pere_fils/"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="pink"
            >
                Suivez-nous sur Instagram
            </Button>
            <Button
            as="a"
            href="https://github.com/Bogerau/Projet-Allain-terrieur.git"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            >
                Suivez-nous sur GitHub
            </Button>
          </HStack>
        </VStack>
    </Center>
</Container>
   )
}