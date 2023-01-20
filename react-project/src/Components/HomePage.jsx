import { Container, VStack, HStack, Box, Spacer, Image, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return <>
        <Box maxW='100%' height="65vh" bg="blue.100">
          <HStack>
            <Spacer/>
            <Box w="40%">
              <VStack>
                <Image src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" alt="Logo" w="60%"/>
                <Spacer/>
                <Text>Please select location, so that we can find a restaurant that delivers to you!</Text>
                <Box w="100%" h="40px" bg="white">
                  <HStack>
                    <Input placeholder='Enter your delievery address' w="50%"/>
                    <Spacer />
                    <Button bg="green" color="white">Locate me</Button>
                  </HStack>
                </Box>
              </VStack>
            </Box>
            <Spacer/>
            <Box border="0px solid green" w="50%" h="80%">
                <Link to="/items">
                  <Image src="https://api.dominos.co.in/prod-olo-api/images/flashBanner/dominos_adaptation_desktop.jpg" alt="Poster" h="100%"/>
                </Link>
            </Box>
          </HStack>
        </Box>
    </>
}