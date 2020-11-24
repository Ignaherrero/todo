import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 33px;
`;

const InputStyle = styled.input`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  box-sizing: border-box;
  width: 476px;
  padding: 12px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  transform: translateX(-6px);
  height: 56px;

  &::placeholder {
    font-weight: 400;
    color: #828282;
    font-size: 1.2rem;
  }
`;

const SendStyled = styled.input`
  font-size: 1.1rem;
  color: #ffffff;
  background-color: #2f80ed;
  font-weight: 600;
  text-align: center;
  padding: 12px;
  width: 109px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  box-sizing: border-box;
  transform: translateX(11px);
`;

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
        <SendStyled value='Add' type='submit' />
      </FormStyle>
    </>
  );
};

export default Form;
