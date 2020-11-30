import React, { useState } from 'react';
import { generate as id } from 'shortid';
import { ThemeProvider } from 'styled-components';

// Components
import Navbar from './components/Navbar';
import Form from './components/Form';
import Task from './components/Task';

// Styled-components
import GlobalStyles from './components/GlobalStyle';
import Container from './components/Container';
import ContainerTask from './components/ContainerTask';
import ContainerButton from './components/ContainerButton';
import ButtonDelete from './components/ButtonDelete';

// Theme
import colors from './theming/colors';

const App = () => {
  const [isDone] = useState(false);
  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState('Completed');

  // * create task
  const handleCreateTask = (e) => {
    e.preventDefault();

    if (e.target.task.value.trim() !== '') {
      const task = e.target.task.value;
      const result = { task, isDone, id: id() };
      setLists([...lists, result]);

      e.target.task.value = '';
    }
  };

  // * complete task
  const handleCompleteTask = (id) => {
    const index = handleGetTask(id);
    // const localArray = lists; aca estoy copiando todo, no los objetos. por eso tengo que hacer el splice.
    const localArray = lists.slice();
    localArray[index].isDone = !localArray[index].isDone;
    setLists(localArray);
  };

  // * it delete a task
  const handleDeleteTask = (id, e) => {
    e.preventDefault();
    const index = handleGetTask(id);
    const localArray = lists.slice();
    localArray.splice(index, 1);
    setLists(localArray);
  };

  // * target activity
  const handleSelectActivity = (selected) => {
    setSelected(selected);
  };

  // * get task
  const handleGetTask = (id) => lists.findIndex((item) => item.id === id);

  // * filter task
  const handleFilterTasks = () => {
    let result;
    if (selected === 'Active') {
      result = lists.filter((item) => item.isDone === false);
    } else if (selected === 'Completed') {
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
  };

  const localArray = handleFilterTasks();
  const completed = handleFilterTasks('Completed');

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
          {selected !== 'Completed' && (
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
                  selected={selected}
                  task={item.task}
                />
              );
            })}
          </ContainerTask>
          {selected === 'Completed' && completed.length > 0 && (
            <ContainerButton>
              <ButtonDelete onClick={handleDeleteAll}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='white'
                  width='12px'
                  height='12px'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z' />
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
