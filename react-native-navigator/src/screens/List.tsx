import React from 'react';
import styled from "styled-components/native";
import {Button} from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items: Array<ItemType> = [
    {id: 1, name: 'React Native'},
    {id: 2, name: 'React Navigation'},
    {id: 3, name: 'Hanbit'},
];

const List = ({navigation}) => {
    const onPress = (item: ItemType) => {
        navigation.navigate('Item', {id: item.id, name: item.name})
    };

    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map(item => (
                <Button
                    key={item.id}
                    title={item.name}
                    onPress={() => onPress(item)}
                />))}
        </Container>
    )
}

type ItemType = {
    id: number;
    name: string;
};

export default List;
