import React from 'react';
import styled from 'styled-components';

export const Popup = (props) => {

    const {
        PopupHandle,
        Title,
        Description
    } = props

    return(
        <Container onClick={PopupHandle}>
            <PopupContent>
                <h3>{Title}</h3>
                <p>{Description}</p>
            </PopupContent>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  width: 400px;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`;
