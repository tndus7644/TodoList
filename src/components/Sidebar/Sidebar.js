import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Sidebar = ({sidebar}) => {

    return(
        <Container className={cn({completed:sidebar})}>
            Sidebar
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  transform: translateX(-120%);
  transition: 0.3s;
  &.completed{
    transform: none;
  }
`;

export default Sidebar;