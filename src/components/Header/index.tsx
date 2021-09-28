import { Flex, Image } from '@chakra-ui/react'


export default function Header() {
  return (
    <Flex as="header" w="100%" justify="center" align="center" p="6" >
      <Image src="/assets/logo.png" alt="worldtrip" />
    </Flex>
  )
}

