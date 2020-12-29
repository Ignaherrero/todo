import React from "react";

// Styled-components
import {
  Nav,
  UnderlineText,
  UnderlineTextThree,
  UnderlineTextTwo,
} from "./NavStyle";
import ContainerUnderline from "./ContainerUnderline";
import {
  UnderLineDivOne,
  UnderLineDivThree,
  UnderLineDivTwo,
} from "./UnderlineDiv";

const Navbar = ({ handleSelectActivity, selected }) => {
  return (
    <>
      <Nav>
        <ul>
          <UnderlineText onClick={() => handleSelectActivity("All")}>
            All
          </UnderlineText>
          <UnderlineTextTwo onClick={() => handleSelectActivity("Active")}>
            Active
          </UnderlineTextTwo>
          <UnderlineTextThree onClick={() => handleSelectActivity("Completed")}>
            Completed
          </UnderlineTextThree>
        </ul>
      </Nav>
      <ContainerUnderline>
        {selected === "All" && <UnderLineDivOne />}
        {selected === "Active" && <UnderLineDivTwo />}
        {selected === "Completed" && <UnderLineDivThree />}
      </ContainerUnderline>
    </>
  );
};

export default Navbar;
