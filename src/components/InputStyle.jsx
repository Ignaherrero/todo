import styled from 'styled-components';

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

export default InputStyle;
