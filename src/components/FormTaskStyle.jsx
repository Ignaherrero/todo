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

export default FormStyle;
