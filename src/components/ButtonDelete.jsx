import styled from "styled-components";

const ButtonDelete = styled.button`
  display: block;
  align-items: center;
  width: 125px;
  height: 41px;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #eb5757;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transform: translateX(9px);

  & svg {
    transform: translate(-2px, 3px);
  }
`;

export default ButtonDelete;
