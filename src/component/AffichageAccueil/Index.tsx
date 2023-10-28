'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  color,
} from '@chakra-ui/react'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

interface Props {
  marginTop?: number
  tags: any[]
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="Epsi.png"
                alt="Logo Epsi"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Information personnel',]} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Présentation
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Bienvenue sur notre site web dédiée a la rénovatotion d'intérieur et d'exterrieur, Vous avez une envie de rénover votre maison ? vous etes au bon endroit ! 
          </Text>
        </Box>
      </Box>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Notre Histoire</Heading>
        <Text as="p" fontSize="lg">
        Terrieur est une entreprise de rénovation de maisons entre père et fils, créée le 27 octobre 2023. 
        Depuis son plus jeune âge, Alex Terrieur aidait son père à réaliser de petits travaux et à monter des meubles, ce qui a créé une 
        passion commune entre eux. Au fil du temps, Alain Terrieur a partagé son savoir-faire avec son fils, renforçant ainsi les liens familiaux. 
        Cette passion commune entre père et fils nous a donné l'envie de créer cette entreprise et de faire de cette passion notre métier.
        

        Notre objectif est de vous aider 
        à réaliser vos rêves les plus fous. Nous mettrons tout notre savoir-faire et notre énergie dans la concrétisation de vos idées, 
        que ce soit un simple changement de peinture ou une rénovation complète. Nous sommes là pour vous accompagner.
        </Text>
        <Text as="p" fontSize="lg">
            Les deux fondateurs de l'entreprise sont Alain Terrieur et son fils, Alex Terrieur. Alain Terrieur sera votre chef de projet 
            pour vos rénovations intérieures. Il se chargera de superviser nos équipes afin de mener à bien le projet rapidement et efficacement.
        </Text>
        <Text as="p" fontSize="lg">
        Alex Terrieur se chargera de gérer tous les projets à l'extérieur de votre maison, que ce soit pour votre jardin ou même la façade de votre maison. 
        Alex Terrieur supervisera ses équipes pour faire de votre rêve une réalité.
        </Text>
      </VStack>
    </Container>
  )
}

export default ArticleList