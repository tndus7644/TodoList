import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const TodoItems = ({id, completed, title, navigate}) => {

    return(
        <Container>
            <Title className={cn({completed})} onClick={navigate}>{title}</Title>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.div`
  font-size: 20px;
  color: #333;
  padding: 20px 15px;
  cursor: pointer;

  &.completed {
    color: #777;
    text-decoration: line-through;
  }
`;

export default TodoItems;