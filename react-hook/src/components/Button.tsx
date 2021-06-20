import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #3498db;
  border-radius: 15px;
  padding: 15px 30px;
  margin: 10px 0;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`

const Button = (param: ButtonParam) => {
    return (
        <Container onPress={param.onPress}>
            <Title>{param.title}</Title>
        </Container>
    )
}

type ButtonParam = {
    title: string,
    onPress: () => void
}

export default Button;
