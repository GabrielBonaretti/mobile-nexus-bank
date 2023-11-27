import styled from "styled-components/native";

export const Background = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const BackgroundIcon = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border-radius: 10px;
  background-color: #202020;
`;

export const TextFunction = styled.Text`
  color: #fff;
  font-size: 15px;
`;
