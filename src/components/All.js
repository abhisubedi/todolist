import {
  Container,
  Box,
  Text,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

export default function All({ tasksList, handleCheckboxChange }) {
  return (
    <Container maxW="full" display={"flex"} justifyContent={"center"} top={0}>
      <Stack spacing={4} alignItems="flex-start">
        <CheckboxGroup textAlign={"left"}>
          {tasksList.map((task, index) => (
            <Box key={index}>
              <Checkbox
                isChecked={task.isChecked}
                onChange={() => handleCheckboxChange(index)}
                colorScheme="green"
              >
                <Text
                  maxW="100%"
                  textDecoration={task.isChecked ? "line-through" : "none"}
                >
                  {task.name}
                </Text>
              </Checkbox>
            </Box>
          ))}
        </CheckboxGroup>
      </Stack>
    </Container>
  );
}
