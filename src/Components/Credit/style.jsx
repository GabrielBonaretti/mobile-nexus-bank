import styled from "styled-components/native";

export const Background = styled.Pressable`
  background-color: #1a1e1c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  height: 75px;
`;

export const Container = styled.View`
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: space-between;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  color: #dbb22f;
`;

export const TextStyled = styled.Text`
  font-size: 17px;
  color: #fff;
`;

export const ParcelsPayed = styled.Text`
  font-size: 20px;
  color: #e3022c;
  font-weight: 700;
`;
