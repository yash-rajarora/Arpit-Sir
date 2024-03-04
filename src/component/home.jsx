
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
import mob from '../assets/CLG_0596.jpg'





export default function Home() {
    return (
    <>
    <Box bgColor={'rgba(201, 228, 222,0.7)'}>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={[mob,bg1]}
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
            
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    
  <Box height={['90vh','80vh']} pt={'5%'} px={['5%', '0%']} mb={['50%','']}>
  <Container maxW={'5xl'} py={12}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {/* For mobile view, order the items differently */}
      <Flex order={[1, 2]}>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={image2}
          objectFit={'cover'}
          height={["90%",'75%']}
        />
      </Flex>
      <Stack spacing={4} order={[2, 1]}>
        <Heading textAlign={['center', '']}>LIFE</Heading>
        <Text color={'gray.500'} fontSize={'lg'} textAlign="justify">
          Shri Arpit Agrawal an eminent educationist, thinker and dedicated social worker, is a man of great vision who is totally committed to the development of technical education and the cause of raising the qualities of life for the betterment of tomorrow. He is a man who is highly proud of time-tested ethos and culture, having his own ideas of social development. He has his own convictions and capacity to judge each issue and the grid to stand by his principles at any cost, and uphold truth and morality.
        </Text>
      </Stack>
    </SimpleGrid>
  </Container>
</Box>

    <Box height={['80vh','70vh']} px={['5%','']} pt={['5%','']}>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex >
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image3}
            objectFit={'cover'}
            height={'95%'}
          />
        </Flex>
        <Stack spacing={4}>
          
          <Heading textAlign={['center','']}>FAMILY</Heading>
          <Text color={'gray.500'} fontSize={'lg'} textAlign="justify">
            Many men can make a fortune but very few can strike the perfect harmony of work life balance. This truly reflects in Arpit sir’s life. as not only he has been an epitome of a role model in the lives of countless students but also an incredible husband and a father of three.
          </Text>
          
        </Stack>
        
      </SimpleGrid>
    </Container>
    </Box>
  <Box height={['90vh','70vh']} mb={'10'} px={['5%','']}>
  <Container maxW={'5xl'} py={12}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={4} order={[2,1]}>
        <Heading textAlign={['center', '']}>Philosophy</Heading>
        <Text fontSize={'lg'} textAlign={['center', '']}>
          मैं पल दो पल का शायर हूँ<br/>
          पल दो पल मेरी कहानी हैं<br/>
          पल दो पल मेरी हस्ती है <br/>
          पल दो पल मेरी जवानी है <br/>
          मैं पल दो पल का शायर हूँ<br/>
        </Text>
        <Text color={'gray.500'} fontSize={'lg'} textAlign="justify">
          He is the one who lives the live to its fullest and makes the most out of every opportunity since the year 2000. He is providing quality education and strives to create a culture of inclusivity and respect while promoting excellence in academics, research, and extracurricular activities.          
        </Text>
      </Stack>
      <Flex order={[1,2]}>
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={image1}
          objectFit={'cover'}
          height={['90%','75%']}
        />
      </Flex>
    </SimpleGrid>
  </Container>
</Box>

    <Box pt={'10'} px={'10%'}>
      <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'#C9E4DE'}>
      <Text fontFamily={'Playfair Display'} fontSize={['28px','56px']} textAlign={'center'} p={'5'}>
      “Reach for the stars,with your feet on the ground”
      </Text>
      </Box>
    </Box>
    <Box pt={'10%'} px={'15%'}>
    <Box  boxShadow={'2xl'} borderRadius={'2xl'} bg={'white'}>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[0,10]}>
        <Stack spacing={4} order={[2,1]}>
          <Box pt={['0','25%']}>
          <Heading textAlign={'center'}>Sweet Hot Entrepreneur</Heading>
          <Text color={'gray.500'} fontSize={'lg'} px={'10'} pb={['7','']}>
          Having a sweet tooth, can gulp easily 10 rasgulla in a go, and if served in a red bowl, no one can imagine the count as favourite color being Red. Entrepreneurship is the professional pursuit of life and JECRC Foundation being the validation of its success.
          </Text>
          </Box>
        </Stack>
        <Flex p={'5'} order={[1,2]}>
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[0,10]}>
        <Flex p={'5'}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={image5}
            objectFit={'cover'}
            
          />
        </Flex>
        <Stack spacing={4}>
        <Box pt={['0%','25%']} pb={['15%','0']}>
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[0,10]}>
        <Stack spacing={4} order={[2,1]}>
        <Box pt={['','25%']} pb={['10%','']}>
          <Heading textAlign={'center'}>Because first ones are important</Heading>
          <Text color={'gray.500'} fontSize={'lg'} px={'5'} pt={'5'}>
          Flying Kite on a Breezy afternoon,Driving First Ze Zen & Patek Phippe by the side, are sure, a Delight.
          </Text>
        </Box> 
        </Stack>
        <Flex p={'5'} order={[1,2]}>
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
    <Box>
    </Box>
    </Box>
  </>
  )

}
