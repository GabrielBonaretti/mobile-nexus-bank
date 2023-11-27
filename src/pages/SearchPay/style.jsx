import styled from "styled-components/native";

export const Background = styled.View`
  background-color: #1a1e1c;
  width: 100%;
  height: 100%;
  padding: 25px;

  justify-content: space-between;
`;

export const ViewContent = styled.View`
  display: flex;
  gap: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  color: #dbb22f;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #202020;
  color: #fff;
  padding: 14px 17px;
  border-radius: 10px;
  font-size: 15px;
`;

export const Button = styled.Pressable`
  width: 100%;
  background-color: #dbb22f;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 900;
  color: #1a1e1c;
`;
