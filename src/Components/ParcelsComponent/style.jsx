import styled from "styled-components/native";

export const Background = styled.View`
  display: flex;
  width: 100%;
  gap: 15px;
  align-items: center;
  padding: 15px;
  background-color: #202020;
  border-radius: 5px;
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const SubContentView = styled.View`
  gap: 5px;
`

export const LineContent = styled.View`
  display: flex;
  flex-direction: row;
`

export const Subtitle = styled.Text`
  font-size: 13px;
  color: #dbb22f;
`

export const TextStyled = styled.Text`
  font-size: 13px;
  color: #fff;
`

export const Button = styled.Pressable`
  width: 300px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid ${props => props.$payed ? "#2ACB37" : "#DBB22F"};
  background: #1A1E1C;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextButton = styled.Text`
  color: #DBB22F;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`