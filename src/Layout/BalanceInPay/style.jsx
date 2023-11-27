// styled components
import styled from "styled-components/native";

export const Background = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #2e2e2e;
`;

export const TextStyled = styled.Text`
  width: fit-content;
  font-size: 15px;
  color: #FFF;
`;

export const BalanceView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`;

export const BalanceText = styled.Text`
  font-size: 15px;
  color: ${(props) => (props.$visible ? "#FFF" : "#332b10")};
  background-color: ${(props) => (props.$visible ? "#1a1e1c" : "#332b10")};
  border-radius: ${(props) => (props.$visible ? "5px" : "5px")};
`;
