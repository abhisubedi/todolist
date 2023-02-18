import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Input,
  Stack,
  Button,
  TabPanel,
} from "@chakra-ui/react";
import All from "./All";
import Active from "./Active";
import Completed from "./Completed";
import { useState, useEffect } from "react";

export default function TodoTabs() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    const activeTasks = tasksList.filter((task) => !task.isChecked);
    const completedTasks = tasksList.filter((task) => task.isChecked);
    setActive(activeTasks);
    setCompleted(completedTasks);
  }, [tasksList]);

  const handleAddTask = () => {
    if (task) {
      const newTask = { name: task, isChecked: false };
      setTasksList([...tasksList, newTask]);
      setTask("");
      setActive([...active, newTask]);
    }
  };

  const handleTaskInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const newTasksList = [...tasksList];
    newTasksList[index].isChecked = !newTasksList[index].isChecked;
    setTasksList(newTasksList);
  };

  return (
    <Container>
      <Stack spacing={4} alignItems="flex-start">
        <Input
          placeholder="Enter task"
          value={task}
          onChange={handleTaskInputChange}
        />
        <Button colorScheme="blue" onClick={handleAddTask}>
          Add Task
        </Button>
      </Stack>
      <Box
        position={"sticky"}
        height={"auto"}
        width={"full"}
        lineHeight={9}
        textAlign={"center"}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        fontFamily={"Monaco"}
      >
        <Tabs variant="line" colorScheme="black" width={"full"}>
          <TabList
            // fontSize={{ base: "30px", md: "80px" }}
            fontWeight={"normal"}
            marginTop={5}
            marginBottom={12}
            display="flex"
            justifyContent="center"
          >
            <Tab fontSize={20} marginRight={7}>
              All
            </Tab>
            <Tab fontSize={20} color={"red"}>
              Active
            </Tab>
            <Tab fontSize={20} color={"green"} marginLeft={7}>
              Completed
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <All
                tasksList={tasksList}
                handleCheckboxChange={handleCheckboxChange}
              />
            </TabPanel>

            <TabPanel>
              <Active
                active={active}
                handleCheckboxChange={handleCheckboxChange}
              />
            </TabPanel>

            <TabPanel>
              <Completed
                completed={completed}
                handleCheckboxChange={handleCheckboxChange}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
