import React from 'react';
import styled from "styled-components/native";


const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.title === '네이버' ? props.theme.blue : props.theme.purple};
  width: 40%;
  border-radius: 15px;
  padding: 15px 40px;
  margin: 10px 0;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`

const Button = props => {
    return (
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
    )
}

export default Button;
