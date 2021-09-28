import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text, Flex } from '@chakra-ui/react'
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);



export default function Slider() {
  return (
    <Box w='100%' p='10' h='450px' mb="20">
      <Swiper navigation={true} pagination={true} mousewheel={true} keyboard={true}>
        <SwiperSlide>
          <Flex
            bgImage="url(/assets/background1.png)"
            alt="aviao"
            width="100%" height="450px"
            align="center" justify="center"
            bgSize='cover'
          >
            <Flex direction="column" align='center' justify='center'>
              <Text fontSize="48" color="white.200">Europa</Text>
              <Text fontSize="24" color="gray.350">O continente mais antigo.</Text>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url(/assets/background2.jpg)"
            alt="aviao"
            width="100%" height="450px"
            align="center" justify="center"
            bgSize='cover'
          >
            <Flex direction="column" align='center' justify='center'>
              <Text fontSize="48" color="blackAlpha.900">Asia</Text>
              <Text fontSize="24" color="blackAlpha.600">O continente mais antigo.</Text>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url(/assets/background2.jpg)"
            alt="aviao"
            width="100%" height="450px"
            align="center" justify="center"
            bgSize='cover'
          >
            <Flex direction="column" align='center' justify='center'>
              <Text fontSize="48" color="blackAlpha.900">Asia</Text>
              <Text fontSize="24" color="blackAlpha.600">O continente mais antigo.</Text>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bgImage="url(/assets/background2.jpg)"
            alt="aviao"
            width="100%" height="450px"
            align="center" justify="center"
            bgSize='cover'
          >
            <Flex direction="column" align='center' justify='center'>
              <Text fontSize="48" color="blackAlpha.900">Asia</Text>
              <Text fontSize="24" color="blackAlpha.600">O continente mais antigo.</Text>
            </Flex>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}