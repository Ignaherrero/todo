import React from 'react';

// Styled-component
import FormStyle from './FormStyle';
import InputStyle from './InputStyle';
import SendStyle from './SendStyle';

const Form = ({ handleCreateTask }) => {
  return (
    <>
      <FormStyle action='post' onSubmit={handleCreateTask}>
        <label htmlFor='task' />
        <InputStyle
          id='task'
          name='task'
          placeholder='add details'
          type='text'
        />
        <SendStyle value='Add' type='submit' />
      </FormStyle>
    </>
  );
};

export default Form;
