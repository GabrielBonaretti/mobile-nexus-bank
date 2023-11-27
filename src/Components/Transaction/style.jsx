import styled from "styled-components/native";

export const Background = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  height: 100%;
`;

export const IconTransaction = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DashedLine = styled.View`
  width: 1px;
  height: 75%;
  border: 1px dashed #adb2b1;
`;

export const TextStyled = styled.Text`
  font-size: 13px;
  color: #ccc;
`;

export const TextValue = styled.Text`
  font-size: 13px;
  color: ${props => props.$sent ? "red" : "green"};
`;

export const ViewRight = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
