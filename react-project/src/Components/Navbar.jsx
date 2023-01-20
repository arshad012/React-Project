import { 
    Flex, 
    Spacer, 
    Box, 
    Heading, 
    ButtonGroup, 
    Button, 
    Avatar, 
    AvatarBadge, 
    AvatarGroup, 
    Stack,
    VStack,
    HStack,
    Text,
    Image,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup,
    Radio,
    Input,
    useDisclosure
} from '@chakra-ui/react';

import { 
    PhoneIcon, 
    AddIcon, 
    WarningIcon,
    HamburgerIcon
} from '@chakra-ui/icons'

import React from "react";
import Login from './Login';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

    return (
    <>
    {/* Navbar */}
    <Flex minWidth='max-content' alignItems='center' gap='2' bg="blue" h="7vh" color="white">
        <HStack w="18%" ml="30px">
            <HamburgerIcon w={6} h={6} />
            <Spacer/>
            <Image src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" alt="logo"/>            
        </HStack>

        <Spacer />

        <HStack border="1px solid white" borderWidth="0 0 0 1px" w="13%" h="80%" fontSize="12px" pr="20px" pl="20px">
          <Avatar src='https://bit.ly/broken-link' w="25px" h="25px" onClick={onOpen} cursor="pointer"/>
          <Spacer />
          <VStack lineHeight="8px">
            <Text size='md' fontSize="10px">MY ACOOUNT</Text>
            <Text size='md' fontSize="10px">Login/Signup</Text>
          </VStack>
        </HStack>      
    </Flex>

    {/* Right Drawer Comonents */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}        
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent bg="#f0ffff">
          <DrawerCloseButton />          
          <DrawerHeader>Create your account on Dominos</DrawerHeader>

          <DrawerBody>
            <Login/>            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    )
}