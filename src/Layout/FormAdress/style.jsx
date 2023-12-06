import styled from "styled-components/native";

export const ViewButtons = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonStyled = styled.Pressable`
  width: 125px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #dbb22f;
  background: ${(props) => (props.$primary ? "#DBB22F" : "#1A1E1C")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextStyled = styled.Text`
  color: ${(props) => (props.$primary ? "#1A1E1C" : "#DBB22F")};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
