import styled from "styled-components";

const SendStyle = styled.input`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.buttonAddColor};
  background-color: ${({ theme }) => theme.backgroundButtonAdd};
  font-weight: 600;
  text-align: center;
  padding: 12px;
  width: 109px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0px 2px 6px ${({ theme }) => theme.shadowButtonAdd};
  box-sizing: border-box;
  transform: translateX(11px);
`;

export default SendStyle;
