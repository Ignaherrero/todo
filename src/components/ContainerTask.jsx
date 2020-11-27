import styled, { css } from 'styled-components';

const ContainerTask = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ selected }) =>
    selected === 'Completed'
      ? css`
          row-gap: 22px;
          margin-top: 19px;
        `
      : css`
          row-gap: 27px;
        `}
`;

export default ContainerTask;
