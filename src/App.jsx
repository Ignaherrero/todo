import React, { Component } from 'react';
import { generate as id } from 'shortid';

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

class App extends Component {
  state = {
    isDone: false,
    lists: [],
    color: '#DA33FF',
    selected: 'Active',
  };

  // * create task
  handleCreateTask = (e) => {
    e.preventDefault();

    if (e.target.task.value.trim() !== '') {
      const { lists, isDone, color } = this.state;
      const task = e.target.task.value;
      const result = [task, isDone, id(), color];
      this.setState({ lists: [...lists, result] });

      e.target.task.value = '';
    }
  };

  // * complete task
  handleCompleteTask = (id) => {
    const index = this.handleGetTask(id);
    const { lists } = this.state;
    const localArray = lists;
    localArray[index] = [
      localArray[index][0],
      !localArray[index][1],
      localArray[index][2],
      localArray[index][3],
    ];
    this.setState({ lists: localArray });
  };

  // * it delete a task
  handleDeleteTask = (id, e) => {
    e.preventDefault();
    const index = this.handleGetTask(id);
    const localArray = this.state.lists;
    localArray.splice(index, 1);
    this.setState({ lists: localArray });
  };

  // * target activity
  handleSelectActivity = (selected) => {
    this.setState({
      selected,
    });
  };

  // * get task
  handleGetTask = (id) => {
    const { lists } = this.state;
    return lists.findIndex((item) => item[2] === id);
  };

  // * filter task
  handleFilterTasks = () => {
    const { lists } = this.state;
    let result;
    const { selected } = this.state;
    if (selected === 'Active') {
      result = lists.filter((item) => Boolean(item[1]) === false);
    } else if (selected === 'Completed') {
      result = lists.filter((item) => Boolean(item[1]) === true);
    } else {
      result = lists;
    }
    return result;
  };

  // * delete all task
  handleDeleteAll = () => {
    this.setState({
      lists: [],
    });
  };

  render() {
    const { selected } = this.state;
    const localArray = this.handleFilterTasks();
    const completed = this.handleFilterTasks('Completed');

    return (
      <>
        <GlobalStyles />
        <Container>
          <h1>#todo</h1>
          <Navbar
            handleSelectActivity={this.handleSelectActivity}
            selected={selected}
          />
          {selected !== 'Completed' && (
            <Form handleCreateTask={this.handleCreateTask} />
          )}
          <ContainerTask selected={selected}>
            {localArray.map((item) => {
              // Recorre cada la data de cada item de la lista y lo envia al componente.
              return (
                <Task
                  handleCompleteTask={() => this.handleCompleteTask(item[2])}
                  handleDeleteTask={(e) => this.handleDeleteTask(item[2], e)}
                  id={item[2]}
                  isDone={item[1]}
                  selected={selected}
                  task={item[0]}
                />
              );
            })}
          </ContainerTask>
          {selected === 'Completed' && completed.length > 0 && (
            <ContainerButton>
              <ButtonDelete onClick={this.handleDeleteAll}>
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
      </>
    );
  }
}

export default App;
