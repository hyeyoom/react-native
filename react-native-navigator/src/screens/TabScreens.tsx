import React from "react";
import styled from "styled-components/native";
import MapView from 'react-native-maps';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  color: black;
  font-size: 30px;
  padding: 20px;
`;

export const Mail = () => {
    return (
        <Container>
            <MainText>상상속의 달력</MainText>
        </Container>
    )
}

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3450a1
`;

const StyledScrollView = styled.ScrollView`
  width: 90%;
`;

const StyledView = styled.View`
  margin-bottom: 15px;
  background-color: #041955;
  border-radius: 12px;
`;

const StyledText = styled.Text`
  color: #ffffff;
  font-size: 30px;
  padding: 20px;
`

const Desc = styled.Text`
  color: #ffffff;
  font-size: 20px;
  padding: 0 20px;
`

const Check = styled.Text`
  padding: 20px;
  color: #eb06ff;
  font-size: 15px;
`

const CheckDone = styled.Text`
  padding: 20px;
  color: #3450a1;
  font-size: 15px;
`

const TitleText = styled.Text`
  color: #ffffff;
  font-size: 40px;
  padding: 20px;
`;

export const Meet = () => {
    return (
        <StyledSafeArea>
            <TitleText>오늘은</TitleText>
            <StyledScrollView>
                <StyledView>
                    <StyledText>마라탕 모임</StyledText>
                    <Desc>위치: 건대 봉자마라탕</Desc>
                    <Desc>인원: 3</Desc>
                    <Check>시작했어요!</Check>
                </StyledView>
                <StyledView>
                    <StyledText>해커톤@연세대</StyledText>
                    <Desc>위치: 연세대학교 공학관</Desc>
                    <Desc>인원: 23</Desc>
                    <CheckDone>끝났어요!</CheckDone>
                </StyledView>
                <StyledView>
                    <StyledText>컨퍼런스@토스</StyledText>
                    <Desc>위치: 역삼역 아크플레이스</Desc>
                    <Desc>인원: 1</Desc>
                    <CheckDone>끝났어요!</CheckDone>
                </StyledView>
                <StyledView>
                    <StyledText>스시윤슬</StyledText>
                    <Desc>위치: 서초역</Desc>
                    <Desc>인원: 2</Desc>
                    <CheckDone>끝났어요!</CheckDone>
                </StyledView>
                <StyledView>
                    <StyledText>아 배고프네</StyledText>
                    <Desc>위치: 밥먹고싶다</Desc>
                    <Desc>인원: 1</Desc>
                    <CheckDone>끝났어요!</CheckDone>
                </StyledView>
            </StyledScrollView>
        </StyledSafeArea>
    )
}

export const Settings = () => {
    return (
        <Container>
            <MapView
                style={{flex: 1, width: '100%'}}
                initialRegion={{
                    latitude: 47.6205,
                    longitude: -122.351,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </Container>
    )
}
