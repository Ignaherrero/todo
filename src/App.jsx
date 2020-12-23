import React, { useEffect, useState } from "react";
import { generate as id } from "shortid";
import { ThemeProvider } from "styled-components";

// Theme
import colors from "./theming/colors";

// Components
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Task from "./components/task/Task";

// Styled-components
import GlobalStyles from "./components/GlobalStyle";
import Container from "./components/Container";
import ContainerTask from "./components/task/ContainerTask";
import ContainerButton from "./components/ContainerButton";
import ButtonDelete from "./components/form/ButtonDelete";

const App = () => {
  const [isDone] = useState(false);
  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState("Active");

  useEffect(() => {
    const result = [];
    if (localStorage.length > 0) {
      Object.keys(localStorage).forEach((key) => {
        result.push(JSON.parse(localStorage.getItem(key)));
      });
      setLists(result);
    }
  }, []);

  // * get task
  const handleGetTask = (id) => lists.findIndex((item) => item.id === id);

  // * create task
  const handleCreateTask = (e) => {
    e.preventDefault();

    if (e.target.task.value.trim() !== "") {
      const task = e.target.task.value;
      const result = { task, isDone, id: id() };
      setLists([...lists, result]);

      e.target.task.value = "";
      localStorage.setItem(result.id, JSON.stringify(result));
    }
  };

  // * complete task
  const handleCompleteTask = (id) => {
    const index = handleGetTask(id);
    const localArray = lists.slice();
    for (let i = 0; i < localArray.length; i += 1) {
      if (localArray[i].id === id) {
        localArray[i].isDone = !localArray[i].isDone;
      }
    }
    setLists(localArray);
    localStorage.setItem(id, JSON.stringify(localArray[index]));
  };

  // * it delete a task
  const handleDeleteTask = (id, e) => {
    e.preventDefault();
    const index = handleGetTask(id);
    const localArray = lists.slice();
    localArray.splice(index, 1);
    setLists(localArray);
    localStorage.removeItem(id);
  };

  // * target activity
  const handleSelectActivity = (selected) => {
    setSelected(selected);
  };

  // * filter task
  const handleFilterTasks = () => {
    let result;
    if (selected === "Active") {
      result = lists.filter((item) => item.isDone === false);
    } else if (selected === "Completed") {
      result = lists.filter((item) => item.isDone === true);
    } else {
      result = lists;
    }
    return result;
  };

  // * delete all task
  const handleDeleteAll = () => {
    const localArray = lists.filter((item) => item.isDone === false);
    setLists(localArray);
    localStorage.clear();
    localArray.forEach((task) =>
      localStorage.setItem(task.id, JSON.stringify(task))
    );
  };

  const localArray = handleFilterTasks();
  const completed = handleFilterTasks("Completed");

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <Container>
          <h1>#todo</h1>
          <Navbar
            handleSelectActivity={handleSelectActivity}
            selected={selected}
          />
          {selected !== "Completed" && (
            <Form handleCreateTask={handleCreateTask} />
          )}
          <ContainerTask selected={selected}>
            {localArray.map((item) => {
              return (
                <Task
                  handleCompleteTask={() => handleCompleteTask(item.id)}
                  handleDeleteTask={(e) => handleDeleteTask(item.id, e)}
                  id={item.id}
                  isDone={item.isDone}
                  key={id()}
                  selected={selected}
                  task={item.task}
                />
              );
            })}
          </ContainerTask>
          {selected === "Completed" && completed.length > 0 && (
            <ContainerButton>
              <ButtonDelete onClick={handleDeleteAll}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  width="12px"
                  height="12px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
                delete all
              </ButtonDelete>
            </ContainerButton>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
