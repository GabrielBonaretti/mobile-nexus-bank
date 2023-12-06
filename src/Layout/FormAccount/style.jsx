import styled from "styled-components/native";

export const Background = styled.View`
  border-radius: 25px;
  width: 100%;
  gap: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: #dbb22f;
`;

export const ViewInputs = styled.View`
  gap: 15px;
`;

export const Input = styled.TextInput`
  color: #aaa;
  width: 100%;
  background-color: transparent;
  border: 1px solid #dbb22f;
  padding: 8px;
  font-size: 15px;
  border-radius: 15px;

  ${(props) => !props.$editable && "background-color: rgba(80, 80, 80, 0.422)"}
`;
