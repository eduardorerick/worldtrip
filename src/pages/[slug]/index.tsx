import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { Flex, Text, Box, HStack, Grid } from '@chakra-ui/react'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <Flex direction='column'>
      <Header />
      <Flex align='flex-end' maxWidth='100vw' h='500' backgroundImage='url(/assets/background3.png)' backgroundSize='cover' py='30' px='32'>
        <Text fontSize='5xl' color='whiteAlpha.900'>Europa</Text>
      </Flex>
      <Flex px='32' py='80px' >
        <HStack spacing='80px'>
          <Box flex='1'>
            <Text textAlign='justify' lineHeight='30px'>A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste</Text>
          </Box>
          <Flex flex='1' justify='space-between'>
              <Flex direction='column' align='center'>
                <Text color='yellow.450' fontSize='5xl' fontWeight='bold'>50</Text>
                <Text fontWeight='bold'>países</Text>
              </Flex>
              <Flex direction='column' align='center'>
                <Text color='yellow.450' fontSize='5xl' fontWeight='bold'>50</Text>
                <Text fontWeight='bold'>países</Text>
              </Flex>
              <Flex direction='column' align='center'>
                <Text color='yellow.450' fontSize='5xl' fontWeight='bold'>50</Text>
                <Text fontWeight='bold'>países</Text>
              </Flex>
          </Flex>
        </HStack>
      </Flex>

      <Flex direction='column' px='32'>
        <Text fontSize='3xl'>Cidades +100</Text>

        <Grid templateColumns="repeat(3, 1fr)">
          <Box>
            Oi
          </Box>
        </Grid>
      </Flex>
    </Flex>
  )
}

export default Post