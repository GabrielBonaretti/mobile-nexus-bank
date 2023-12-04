import styled from "styled-components/native";

export const Background = styled.Pressable`
  background-color: #202020;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 15px;
  height: 75px;
`;

export const Container = styled.View`
  display: flex;
  width: fit-content;
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
