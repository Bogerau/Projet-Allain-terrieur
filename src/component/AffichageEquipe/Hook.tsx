import {
  Button, 
  Center, 
  Container, 
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react';
import GridBlurredBackdrop from './Index';

function BoutonEquipe() {
  const [afficherGrid, setAfficherGrid] = useState(false);
  const [color, setColor] = useState(false);

  const toggleAffichage = () => {
    const path="/contact"
  };

  useEffect(() => {
    if (afficherGrid) {
      // Vous pouvez effectuer des actions ici lorsque afficherGrid est true
    }
  }, [afficherGrid]);

  return (
    <div>
      <Container maxW={'7xl'} p="12">
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2" id="Equipe">Notre Équipe</Heading>
          <Text as="p" fontSize="lg">
            Nous avons réussi à rassembler la meilleure équipe possible pour nous aider dans notre projet ! 
            Chacun de nos collaborateurs a un savoir-faire différent pour nous permettre de réaliser tous vos projets. 
            Si nous en avons besoin, nous collaborerons à nos frais avec d'autres experts pour mieux réussir votre projet. 
            Le réel objectif de Terrieur est de vous satisfaire.
          </Text>
        </VStack>
      </Container>
      <Center>
        <Button 
        w="fit-content"
        bg={color == false ? 'green.400' : 'blue.400'}
        rounded={'full'}
        px={6}
        onClick={toggleAffichage}>
        {afficherGrid ? 'Cacher l\'équipe' : 'Afficher notre équipe'}
        </Button>
      </Center>
        {afficherGrid && <GridBlurredBackdrop />}
    </div>
  );
}

export default BoutonEquipe;
