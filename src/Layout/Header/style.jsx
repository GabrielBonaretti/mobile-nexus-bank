import styled from "styled-components/native";

export const Background = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between;
  align-items: flex-end;
`;


export const Left = styled.View`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 42px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const ImageProfile = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 10px;
`;

export const ViewTexts = styled.View`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const TextCpf = styled.Text`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.09px;
  color: #DBB22F;
`;

export const TextName = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.13px;
  color: #fff;
`;

export const Right = styled.View`
  display: flex;
  width: 20%;
  height: 42px;
  justify-content: center;
  align-items: flex-end;
`;
