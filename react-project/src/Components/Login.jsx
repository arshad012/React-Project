import { HStack, VStack, Image, Text, Input, Box, Button, Spacer } from "@chakra-ui/react";

export default function Login() {
    return <div>
        <HStack>
            <Image src="https://pizzaonline.dominos.co.in/static/assets/logo_white.svg" alt="logo"/>
            <Image src="https://pizzaonline.dominos.co.in/static/assets/login_pizza_image.png" alt="Pizza image"/>            
        </HStack>
        <VStack>
            <Text fontSize="12px"> <Text as="b">Login</Text> to unlock new awesome features</Text>
            <HStack>
                <Image src="https://pizzaonline.dominos.co.in/static/assets/icons/great_food.svg"/>
                <VStack lineHeight="7px">
                    <Text fontSize="10px">Great</Text>
                    <Text fontSize="10px">Food</Text>
                </VStack>
                <Image src="https://pizzaonline.dominos.co.in/static/assets/icons/great_offers.svg"/>
                <VStack lineHeight="7px">
                    <Text fontSize="10px">Great</Text>
                    <Text fontSize="10px">Offers</Text>
                </VStack>
                <Image src="https://pizzaonline.dominos.co.in/static/assets/icons/easy_reorder.svg"/>
                <VStack lineHeight="7px">
                    <Text fontSize="10px">Easy</Text>
                    <Text fontSize="10px">Reordering</Text>
                </VStack>
            </HStack>            
            <Box bg="white" padding="10px">
                <VStack fontSize="14px">
                    <Text>Login with your valid mobile number</Text>
                    <Input type="number" placeholder='Mobile Number' />                
                    <Input type="email" placeholder='Email' />                    
                    <Button type="submit">Submit</Button>
                </VStack>
            </Box>
        </VStack>       
    </div>
}