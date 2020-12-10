import styled from "styled-components";

const ContainerUnderline = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomMenuTask};
`;

export default ContainerUnderline;
