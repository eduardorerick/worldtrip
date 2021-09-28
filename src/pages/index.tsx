import type { NextPage } from 'next'
import { Flex, Text, Icon, Image, Heading, Box, Divider } from '@chakra-ui/react'
import Slider from '../components/Slider'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Flex direction="column" >
      
      <Header />
      <Flex bgImage="url('/assets/heroBg.png')" py="10" px="20" bgSize="cover" justify="space-between" align="center" >
        <Flex direction="column" maxWidth={450} >
          <Heading color="white.200" lineHeight="tall" fontWeight="medium"> 5 Continentes, <br />infinitas possibilidades.</Heading>
          <Text color="white.200" fontWeight="light" fontSize="xl">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Flex>
        <Box maxHeight={225}>
          <Image src="/assets/airplane.png" alt="Avião voando" pos="relative" />
        </Box>
      </Flex>

      <Flex px="20" w="100%" justify="space-between" py="20">
        <Flex direction="column" justify="center" align="center">
          <Image src="/assets/cocktail.png" alt="Coquetel" boxSize="130px" />
          <Text color="gray.850" mt="3" fontWeight="semibold" fontSize="2xl">vida noturna</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/assets/surf.png" alt="Surf" boxSize="130px" />
          <Text color="gray.850" mt="3" fontWeight="semibold" fontSize="2xl" >praia</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/assets/building.png" alt="Prédio" boxSize="130px" />
          <Text color="gray.850" mt="3" fontWeight="semibold" fontSize="2xl">moderno</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/assets/museum.png" alt="Museu" boxSize="130px" />
          <Text color="gray.850" mt="3" fontWeight="semibold" fontSize="2xl">clássico</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/assets/earth.png" alt=" Planeta Terra" boxSize="130px" />
          <Text color="gray.850" mt="3" fontWeight="semibold" fontSize="2xl"> e mais...</Text>
        </Flex>
      </Flex>
      <Flex w="100vw" justify="center">
        <Box w={200}>
          <Divider />
        </Box>
      </Flex>
      <Flex py="20" w="100%" justify="center" align="center" direction="column" >
        <Heading color="gray.850">Vamos nessa?</Heading>
        <Heading color="gray.850">Então escolha seu continente</Heading>
      </Flex>
      <Slider />
    </Flex>

  )
}

export default Home
