import React, { useEffect, useState } from "react";
import { generate as id } from "shortid";
import { ThemeProvider } from "styled-components";

// Theme
import colors from "./theming/colors";

// Components
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import TaskLists from "./components/task/TaskLists";
import Footer from "./components/footer/Footer";

// Styled-components
import GlobalStyles from "./components/GlobalStyle";
import ContainerTodo from "./components/ContainerTodo";
import Container from "./components/Container";

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
          <ContainerTodo>
            <h1>#todo</h1>
            <Navbar
              handleSelectActivity={handleSelectActivity}
              selected={selected}
            />
            <Form handleCreateTask={handleCreateTask} selected={selected} />
            <TaskLists
              selected={selected}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
              localArray={localArray}
              handleDeleteAll={handleDeleteAll}
              completed={completed}
            />
          </ContainerTodo>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
