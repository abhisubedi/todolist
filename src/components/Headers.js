import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

export default function Headers() {
  return (
    <Container maxW="full" display={"flex"} justifyContent={"center"} top={0}>
      <Box>
        <Text
          fontSize="5xl"
          fontWeight="normal"
          color="gray.800"
          fontFamily={"Courier New"}
        >
          #todo
        </Text>
      </Box>
    </Container>
  );
}
