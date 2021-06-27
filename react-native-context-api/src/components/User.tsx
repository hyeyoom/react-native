import React from 'react'
import styled from 'styled-components/native';
import {UserConsumer} from "../contexts/User";

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`

const User = () => {
    return (
        <UserConsumer>
            {({user}) => <StyledText>Name: {user.name}</StyledText>}
        </UserConsumer>
    )
}

export default User
