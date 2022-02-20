import React from 'react';
import styled from 'styled-components';

const PhotoCard = (props) => {

    const {
        id,
        alt_description,
        urls,
        likes,
        user,
    } = props

    return(
        <Container>
            <Thumb>
                <img src={urls.regular} alt={alt_description}/>
            </Thumb>
            <Desc>
                <Head>
                    <img src={user.profile_image.medium} alt=""/>
                    <p>{user.name}</p>
                </Head>
                <p className={'bio'}>{user.bio}</p>
            </Desc>
            <Footer>
                <span>{user.location}</span>
                <span>{likes}</span>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
  box-shadow: 1px 1px  10px rgba(0,0,0,0.15);
`;

const Thumb = styled.div`
  img{
    height: 260px;
    width: 100%;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  background: #fff;
  padding: 20px;
  p{
    color: #666;
    font-size: 14px;
    &.bio{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      min-height: 52px;
    }
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f1f1f1;
  padding: 10px 20px;
  span{
    font-size: 13px;
    color: #999;
  }
`;



export default PhotoCard;