import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333333;
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
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    display: block;
    background-color: #18a0fb;
    /* fix that */
    bottom: 0.3px;
  }
`;

const ContainerUnderline = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

const UnderLineDiv = styled.div`
  height: 4px;
  width: 89px;
  background-color: #2f80ed;
  border-radius: 4px 4px 0px 0px;
`;

const UnderLineDivOne = styled(UnderLineDiv)`
  transform: translate(20px, 1px);
  grid-column: 1;
`;

const UnderLineDivTwo = styled(UnderLineDiv)`
  transform: translate(4px, 1px);
  grid-column: 2;
`;
const UnderLineDivThree = styled(UnderLineDiv)`
  transform: translate(-4px, 1px);
  grid-column: 3;
`;

const UnderlineText = styled.li`
  transform: translate(20px, 4px);
`;

const UnderlineTextTwo = styled.li`
  transform: translate(6px, 5px);
`;

const UnderlineTextThree = styled.li`
  transform: translate(-4px, 4px);
`;

const Navbar = ({ handleSelectActivity, selected = 'All' }) => {
  return (
    <>
      <Nav>
        <ul>
          <UnderlineText onClick={() => handleSelectActivity('All')}>
            All
          </UnderlineText>
          <UnderlineTextTwo onClick={() => handleSelectActivity('Active')}>
            Active
          </UnderlineTextTwo>
          <UnderlineTextThree onClick={() => handleSelectActivity('Completed')}>
            Completed
          </UnderlineTextThree>
        </ul>
      </Nav>
      <ContainerUnderline>
        {selected === 'All' && <UnderLineDivOne />}
        {selected === 'Active' && <UnderLineDivTwo />}
        {selected === 'Completed' && <UnderLineDivThree />}
      </ContainerUnderline>
    </>
  );
};

export default Navbar;
