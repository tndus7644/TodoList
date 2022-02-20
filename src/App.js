import React from 'react';
import styled from 'styled-components';

import {GlobalStyle} from "./Styled/Common.Styled";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Routes from "./routes/Routes";
import {useSelector} from "react-redux";

const App = () => {

    const state = useSelector(state => state)

    return(
        <Container>
            <GlobalStyle/>
            <Header/>
            <Sidebar/>
            <Routes/>
        </Container>
)
}

const Container = styled.div`
  
`;

export default App;