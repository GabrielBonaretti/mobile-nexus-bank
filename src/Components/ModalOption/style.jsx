import styled from "styled-components/native";

export const Background = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 10px;

  border-bottom-width: ${props => props.$logout ? "0px" : "1px"};
  border-bottom-style: solid;
  border-bottom-color: #2e2e2e;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const Icon = styled.Image`
    width: 25px;
    height: 25px;
`

export const TextStyled = styled.Text`
  font-size: 15px;
  color: ${props => props.$logout ? "#E3022C" : "#fff"};
`;
