import styled from "styled-components";

const ContainerTodo = styled.main`
  width: 600px;
  place-self: start center;

  & h1 {
    color: ${({ theme }) => theme.colorTitle};
    font-size: 3rem;
    letter-spacing: -2px;
    text-align: center;
    font-family: "Raleway", sans-serif;
    transform: translate(4px, -14px);
  }
`;

export default ContainerTodo;
