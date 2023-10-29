import {
    Button, 
    Center, 
    Container, 
    Heading,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState, useEffect } from 'react';
  
  function BoutonProject() {
    const [afficherGrid, setAfficherGrid] = useState(false);
    const [color, setColor] = useState(false);
  
    const toggleAffichage = () => {
      setAfficherGrid(!afficherGrid);
      setColor(color === false ? true : false);
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
            <Heading as="h2" id="Equipe">Nos Réalisations</Heading>
            <Text as="p" fontSize="lg">
                Vous pourrez retrouver ici toutes nos réalisations récentes !
            </Text>
          </VStack>
        </Container>
        <Center>
          <Button 
            w="fit-content"
            bg={color === false ? 'green.400' : 'blue.400'}
            rounded={'full'}
            px={6}
            onClick={toggleAffichage}
          >
            {afficherGrid ? 'Cacher nos réalisations' : 'Voir nos réalisations'}
          </Button>
        </Center>
        {afficherGrid && 
            <VStack paddingTop="40px" spacing="2" alignItems="Center">
                <Heading as="h2" id="Equipe">Oups... Aucune réalisation trouvée.</Heading>
            </VStack>}
      </div>
    );
}
  
  export default BoutonProject;
  