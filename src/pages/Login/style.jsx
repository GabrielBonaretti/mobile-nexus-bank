import styled from "styled-components/native";

export const ViewStyled = styled.View`
  background-color: #1A1E1C;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 55px;
`;

export const Logo = styled.Image`
  width: 50%;
`;

export const ViewInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ViewButtons = styled.View`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ViewLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


export const Line = styled.View`
  width: 130px;
  height: 1px;
  background-color: #DBB22F;
`

export const TextLine = styled.Text`
  color: #DBB22F;
  width: fit-content;
  font-size: 13px;
`

export const TextCopy = styled.Text`
  position: absolute;
  bottom: 20px;

  color: #B1B1B1;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
`