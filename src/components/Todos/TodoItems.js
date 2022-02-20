import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const TodoItems = ({id, completed, title}) => {

    return(
        <Container>
            <Title className={cn({completed})}>{title}</Title>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.div`
    font-size: 20px;
  color: #ff5252;
  padding: 20px 0;
  &.completed{
    color: #777;
    text-decoration: line-through;
  }
`;

export default TodoItems;