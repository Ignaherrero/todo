import styled from 'styled-components';

const FormStyle = styled.form`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  & input[type='checkbox'] {
    display: none;
  }

  & span {
    cursor: pointer;
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid ${({ theme }) => theme.spanBorder};
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ isDone }) =>
      isDone
        ? ({ theme }) => theme.spanBackgroundDone
        : ({ theme }) => theme.spanBackground};
  }

  & label {
    cursor: pointer;
    text-decoration: ${({ isDone }) => isDone && 'line-through'};
    font-size: 1.5rem;
    margin-left: 9px;
    font-weight: 500;
  }
`;

export default FormStyle;
