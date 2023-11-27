// styled components
import styled from "styled-components/native"

export const BalanceView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: fit-content;
  height: fit-content;
`

export const BalanceText = styled.Text`
  /* padding: 5px; */
  font-size: 23px;
  color: ${(props) => (props.$visible ? "#FFF" : "#332b10")};
  background-color: ${(props) => (props.$visible ? "#1a1e1c" : "#332b10")};
  border-radius: ${(props) => (props.$visible ? "0px" : "5px")};
`
