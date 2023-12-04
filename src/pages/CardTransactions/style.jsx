import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #1a1e1c;
  align-items: center;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Scroll = styled.ScrollView`
  width: 100%;
`;

export const CardView = styled.View`
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ContentViews = styled.View`
  margin-top: 15px;
  flex: 1;
`;

export const TransactionsViews = styled.View`
  gap: 25px;
  height: 100%;
  margin-top: 20px;
  padding: 0px 25px;
`

export const ViewSubtitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 1px;
`

export const ButtonSection = styled.Pressable`
  border-radius: 20px 20px 0px 0px;
  text-align: center;
  width: 49.5%;
  background-color: ${props => props.$active ? "#886f1d13" : "#1a1e1c"};
  border: ${props => props.$active ? "0px" : "1px"} solid  #886f1d13;
  
`

export const Subtitle = styled.Text`
  font-size: 17px;
  color: #dbb32f;
  font-weight: bold;
  padding: 15px;
  width: fit-content;
`;

export const ViewTeste = styled.View`
  background-color: #886f1d13;
  flex: 1;
`