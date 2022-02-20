import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom'
import List from "./List";
import Detail from "./Detail";
import Write from "./Write";

const Todos = () => {

    return(
        <Container>
            <Route exact path={"/todos"} component={List}/>
            <Route path={"/todos/detail/:id"} component={Detail}/>
            <Route path={"/todos/write"} component={Write}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Todos;