import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100px;
  margin-top: 5%;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showsHorizontalScrollIndicator: false,
})``;

export const TabsItem = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
`;

export const TabsText = styled.Text`
  font-size: 13px;
  color: #fff;
  margin-bottom: 15px;
`;
