import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./photoCard";

const PhotoList = ({photos = []}) => {

    return(
        <Container>
            <Row>
                {
                    photos.map((item, i) => (
                        <Col key={i}>
                             <PhotoCard {...item}/>
                        </Col>
                        ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 33.3333%;
  padding: 15px;
`;

export default PhotoList;