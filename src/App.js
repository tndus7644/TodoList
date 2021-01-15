import React,{useState} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./Styled/Common.Styled";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Todos from "./pages/Todos";
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";

const App = () => {

    const [sidebar, setSidebar] = useState(false);

    const onClickMenu = () => {
        setSidebar(!sidebar)
    }

    return(
        <Container>
            <GlobalStyle/>
            <Header onClickMenu={onClickMenu}/>
            <Sidebar sidebar={sidebar}/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/todos'} component={Todos}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/videos'} component={Videos}/>
            </Switch>
        </Container>
)
}

const Container = styled.div`
  
`;

export default App;