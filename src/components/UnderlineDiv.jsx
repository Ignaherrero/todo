import styled from 'styled-components';

const UnderLineDiv = styled.div`
  height: 4px;
  width: 89px;
  background-color: #2f80ed;
  border-radius: 4px 4px 0px 0px;
`;

export const UnderLineDivOne = styled(UnderLineDiv)`
  transform: translate(20px, 1px);
  grid-column: 1;
`;

export const UnderLineDivTwo = styled(UnderLineDiv)`
  transform: translate(4px, 1px);
  grid-column: 2;
`;
export const UnderLineDivThree = styled(UnderLineDiv)`
  transform: translate(-4px, 1px);
  grid-column: 3;
`;
