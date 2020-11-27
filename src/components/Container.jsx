import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  width: 600px;
  margin: auto;

  & h1 {
    color: #333333;
    font-size: 3rem;
    letter-spacing: -2px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    transform: translate(4px, -14px);
  }
`;

export default Container;
