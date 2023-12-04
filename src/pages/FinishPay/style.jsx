import styled from "styled-components/native";

export const Background = styled.View`
  background-color: #1a1e1c;
  width: 100%;
  height: 100%;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const ViewInput = styled.View`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #464646;
  padding: 5px 10px;
`;

export const TextStyled = styled.Text`
  font-size: 25px;
  color: #dbb22f;
`;

export const Input = styled.TextInput`
  font-size: 25px;
  color: #dbb22f;
`;

export const DescriptionView = styled.View`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  width: 90%;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  color: #dbb22f;
  font-weight: bold;
`;

export const InputDescription = styled.TextInput`
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  background-color: #202020;
  height: 100px;
  color: #fff;
`;

export const ViewUser = styled.View`
  display: flex;
  width: 90%;
  gap: 10px;
`;

export const LineContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  color: #adb2b1;
  font-size: 16px;
  font-weight: 900;
`;

export const Content = styled.Text`
  color: #fff;
  font-size: 15px;
`;

export const Button = styled.Pressable`
  width: 100%;
  background-color: ${(props) => (props.$disabled ? "#cdcdcd" : "#dbb22f")};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: 900;
  color: ${(props) => (props.$disabled ? "#777" : "#1a1e1c")};
`;
