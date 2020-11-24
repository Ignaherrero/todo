import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  & input[type='checkbox'] {
    display: none;
  }

  & span {
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
    background-color: ${({ isDone }) => {
      return isDone ? '#2F80ED' : ' white';
    }};
  }

  & label {
    text-decoration: ${({ isDone }) => isDone && 'line-through'};
    font-size: 1.5rem;
    margin-left: 9px;
    font-weight: 500;
  }
`;

const Task = ({
  isDone,
  id,
  task,
  handleCompleteTask,
  handleDeleteTask,
  selected,
}) => {
  return (
    <>
      <FormStyle action='' isDone={isDone}>
        <input
          type='checkbox'
          id={id}
          name='task'
          value={task}
          onChange={handleCompleteTask}
        />
        <span onClick={handleCompleteTask}>
          {isDone && (
            //  svg check
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='white'
              width='22px'
              height='22px'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
            </svg>
          )}
        </span>

        <label htmlFor={id}>{task}</label>

        {isDone && selected === 'Completed' && (
          // svg delete
          <svg
            svg
            onClick={handleDeleteTask}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#BDBDBD'
            width='24px'
            height='24px'
          >
            <path d='M0 0h24v24H0V0z' fill='none' />
            <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z' />
          </svg>
        )}
      </FormStyle>
    </>
  );
};

export default Task;
