import { Link } from "react-router-dom";
import { 
  Container, 
  Box, 
  Spacer, 
  HStack, 
  Grid, 
  GridItem, 
  Image 
} from "@chakra-ui/react";

export default function Items() {
    return <>
      <Link to="/items"></Link>
      <Box mt="20px">
        <HStack>
          <Spacer/>
          <Box border="1px solid red" h="400px" w="50%">
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              
            </Grid>
          </Box>
          <Spacer/>
          <Spacer/>
          <Box border="1px solid red" h="400px" w="22%"></Box>
          <Spacer/>
        </HStack>
      </Box>
    </>
}
