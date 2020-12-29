import styled from "styled-components";

export const Nav = styled.nav`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.textMenuTask};
  font-size: 1.2rem;

  & ul {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    height: 49px;
  }

  & ul li {
    position: relative;
    cursor: pointer;
  }

  & ul li:hover::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.underlineTextTask};
    /* fix that */
    bottom: 0.3px;
  }
`;

export const UnderlineText = styled.li`
  transform: translate(20px, 4px);
`;

export const UnderlineTextTwo = styled.li`
  transform: translate(6px, 5px);
`;

export const UnderlineTextThree = styled.li`
  transform: translate(-4px, 4px);
`;
