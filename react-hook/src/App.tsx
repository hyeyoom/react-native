import React, {useState} from 'react';
import styled from "styled-components/native";
import Dog from "./components/Dog";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

const App = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <Container>
            <Dog/>
        </Container>
    )
}

export default App;
