import { Container, VStack, HStack, Box, Spacer, Image, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return <>
      <Link to="/"></Link>
        <Box maxW='100%' height="70vh" bg="#f2f2f2">
          <HStack>
            <Spacer/>
            <Box w="40%">
              <VStack>
                <Image src="https://pizzaonline.dominos.co.in/static/assets/dominosLogoBlue.png" alt="Logo" w="60%"/>
                <Spacer/>
                <Text>Please select location, so that we can find a restaurant that delivers to you!</Text>
                <Box w="100%" h="40px" bg="white">
                  <HStack>
                    <Input placeholder='Enter your delievery address' w="50%"/>
                    <Spacer />
                    <Button bg="green" color="white">Locate me</Button>
                  </HStack>
                  <Spacer/>
                  <Image src="https://pizzaonline.dominos.co.in/static/assets/home_search.png" alt="logo"/>
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
          <Box textAlign="left" width="100%" bg="white">
            <Text ml="80px" fontSize='sm' as="b">Offers</Text>
            <Image ml="80px" w="160px" src="https://api.dominos.co.in/prod-olo-api/images/paytm_wallet_offer_on_dominos_20211124@3x.jpg" alt="offers"/>
          </Box>

          {/* Footer */}
          <Box bg="#222e3a" h="23vh">
            <HStack>
              <Box ml="50px" w="40%">
                <Image mt="30px" mb="30px" src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" alt="logo"/>                                
                  <HStack color="white" fontSize='sm'>
                    <Text>Disclaimer</Text>                  
                    <Spacer/>
                    <Text>Pivacy Policy</Text>
                    <Spacer/>
                    <Text>F&Q</Text>
                    <Spacer/>
                    <Text>Terms & conditions</Text>
                    <Spacer/>
                    <Text>Feedback</Text>                    
                  </HStack>                
              </Box>
              <Spacer/>
              <Box w="30%" color="white" textAlign="left">
                <Text mt="20px" mb="20px">DOWNLOAD APP</Text>
                <HStack>
                  <Image w="100px" src="https://pizzaonline.dominos.co.in/static/assets/play_store.png" alt="Google play"/>
                  <Image w="100px" src="https://pizzaonline.dominos.co.in/static/assets/app_store.png" alt="App store"/>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box bg="#1a2735" h="9vh" color="white" borderWidth="1px 0 0 0">
            <Text fontSize="sm">All Rights Reserved. Copyright © Jubilant FoodWorks Ltd.</Text>
          </Box>
    </>
}