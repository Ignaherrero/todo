import React from "react";

// Styled-components
import ButtonDelete from "./ButtonDelete";
import ContainerButton from "./ContainerButton";

// svg
import { ReactComponent as Icon } from "../../assets/trash.svg";

const Delete = ({ selected, completed, handleDeleteAll }) => {
  return (
    <>
      {selected === "Completed" && completed.length > 0 && (
        <ContainerButton>
          <ButtonDelete onClick={handleDeleteAll}>
            <Icon />
            delete all
          </ButtonDelete>
        </ContainerButton>
      )}
    </>
  );
};

export default Delete;
