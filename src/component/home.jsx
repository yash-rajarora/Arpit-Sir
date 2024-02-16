
import {
  Stack, Flex, Button, Text, VStack, useBreakpointValue,Box,Heading,GridItem,Container,SimpleGrid,Image,Grid,Textarea
} from '@chakra-ui/react'
import bg1 from '../assets/arpit.jpg'
import image1 from '../assets/11.jpg' 
import image2 from '../assets/12.webp' 
import image3 from '../assets/13.jpg' 
import image4 from '../assets/14.png'
import image5 from '../assets/15.png'
import image6 from '../assets/16.png'

import { Link } from 'react-router-dom'





export default function Home() {
  return (
    <>
    <Box bgColor={'rgba(201, 228, 222,0.7)'}>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={bg1}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
       >
        <Stack maxW={'6xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={'65'}>
            {/* Welcome to 9 Direction Studio */}
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {/* Where Dreams Meet Design */}
          </Text>
          <Stack direction={'row'} >
            <Link to='Explore'>
            {/* <Button
              bg="#3D0C11"
              rounded={'xl'}
              color={'white'}
              _hover={{
                bg:"#3D0C11"
              }}
              >
              Explore More
            </Button> */}
            </Link>
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    
    <Box height={'80vh'} pt={'5%'}>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          
          <Heading>LIFE</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Shri Arpit Agrawal an eminent educationist, thinker and dedicated social worker, is a man of great vision who is totally committed to the development of technical education and the cause of raising the qualities of life for the betterment of tomorrow. He is a man who is highly proud of time-tested ethos and culture, having his own ideas of social development. He has his own convictions and capacity to judge each issue and the grid to stand by his principles at any cost, and uphold truth and morality.
          </Text>
          
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image2}
            objectFit={'cover'}
            height={'75%'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
    <Box height={'70vh'} >
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image3}
            objectFit={'cover'}
            height={'85%'}
          />
        </Flex>
        <Stack spacing={4}>
          
          <Heading>FAMILY</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Many men can make a fortune but very few can strike the perfect harmony of work life balance. This truly reflects in Arpit sir’s life. as not only he has been an epitome of a role model in the lives of countless students but also an incredible husband and a father of three.
          </Text>
          
        </Stack>
        
      </SimpleGrid>
    </Container>
    </Box>
    <Box height={'70vh'}  mb={'10'}>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          
          <Heading>Philosophy</Heading>
          <Text fontSize={'lg'}>
          मैं पल दो पल का शायर हूँ<br/>
          पल दो पल मेरी कहानी हैं<br/>
          पल दो पल मेरी हस्ती है <br/>
          पल दो पल मेरी जवानी है <br/>
          मैं पल दो पल का शायर हूँ<br/>

          </Text>
          <Text color={'gray.500'} fontSize={'lg'}>
          He is the one who lives the live to its fullest and make the most out of every opportunity since the year 2000, he is providing a quality education he strives to create a culture inclusivity and respect while promoting excellence in academics, research, extra curricular activities.          
          </Text>
          
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image1}
            objectFit={'cover'}
            height={'75%'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
    <Box pt={'10'} px={'10%'}>
      <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'#C9E4DE'}>
      <Text fontFamily={'Playfair Display'} fontSize={'56px'} textAlign={'center'} p={'5'}>
      “Reach for the stars,with your feet on the ground”
      </Text>
      </Box>
    </Box>
    <Box pt={'10%'} px={'15%'}>
    <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'white'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Box pt={'25%'}>
          <Heading textAlign={'center'}>Sweet Hot Entrepreneur</Heading>
          <Text color={'gray.500'} fontSize={'lg'} px={'10'}>
          Having a sweet tooth, can gulp easily 10 rasgulla in a go, and if served in a red bowl, no one can imagine the count as favourite color being Red. Entrepreneurship is the professional pursuit of life and JECRC Foundation being the validation of its success.
          </Text>
          </Box>
        </Stack>
        <Flex p={'5'}>
          <Image
            
            rounded={'md'}
            alt={'feature image'}
            src={image4}
            objectFit={'cover'}
            height={'95%'}
          />
        </Flex>
      </SimpleGrid>
      </Box>
    </Box>
    <Box pt={'10%'} px={'15%'}>
    <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'white'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex p={'5'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image5}
            objectFit={'cover'}
            
          />
        </Flex>
        <Stack spacing={4}>
        <Box pt={'25%'}>
          <Heading textAlign={'center'}>The Un-Tiring Trio</Heading>
          <Text color={'gray.500'} fontSize={'lg'} px={'5'}>
          Blessed with 3 Angels in the world is the greatest moment in life, and, is the centre of the Universe. Religion comes Second, Cricket Remains First, with the Comfort lies in Jeans & T-shirt .
          </Text>
        </Box>
        </Stack>
        
      </SimpleGrid>
      </Box>
    </Box>
    <Box py={'10%'} px={'15%'}>
    <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'white'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
        <Box pt={'25%'}>
          <Heading textAlign={'center'}>Because first ones are important</Heading>
          <Text color={'gray.500'} fontSize={'lg'} px={'5'} pt={'5'}>
          Flying Kite on a Breezy afternoon,Driving First Ze Zen & Patek Phippe by the side, are sure, a Delight.
          </Text>
        </Box> 
        </Stack>
        <Flex p={'5'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image6}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      </Box>
    </Box>
    
    {/* <Box>
      <Box pt={14}pb={[0,14]}>
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700" color={"Black"} fontSize={['35','45']}>
              Our Portfolio
            </Text>
          </Heading>
        </Container>
      </Box>
          <Box py={14} px={"17%"} textAlign="center">
            <Grid templateColumns={["repeat(3,1fr)","repeat(3, 1fr)"] } gap={'10'}>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img1} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img2} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img3} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img4} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img5} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img6} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img7} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img8} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img9} />
                </Box>
              </GridItem>
            </Grid>
          </Box>
    </Box> */}
    <Box>
    </Box>
    </Box>
  </>
  )

}
