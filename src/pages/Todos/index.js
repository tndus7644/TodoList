import React from 'react';
import styled from 'styled-components';
import {Route} from 'react-router-dom'
import List from "./List";

const Todos = () => {

    return(
        <Container>
            <Route exact path={"/todos"} component={List}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Todos;