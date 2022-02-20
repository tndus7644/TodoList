import React from 'react';
import styled from 'styled-components';
import GoogleLogin from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../../constants";
import { useGoogleLogin } from 'react-google-login';
import {useActionCreators} from "../../redux/actionCreators";
import {useSelector} from "react-redux";

const Member = () => {

    const {authActions} = useActionCreators();

    const {isLoggedIn, profileObj} = useSelector(state => state.auth);

    const onSuccess = ({profileObj}) => {
        console.log(profileObj)
        authActions.updateState({
            profileObj,
            isLoggedIn: true
        })
    }

    const onFailure = (err) => {
        console.log(err)
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }

    const { signIn, loaded } = useGoogleLogin({
        clientId:GOOGLE_CLIENT_ID,
        cookiePolicy:'single_host_origin',
        isSignedIn:true,
        onSuccess,
        onFailure
    })

    if(!loaded) return <div style={{minWidth:'80px'}}/>;

    return (
        <Container>

            {
                isLoggedIn
                ?
                    <User>
                        <img src={profileObj?.imageUrl} alt=""/>
                        <p>{profileObj?.name}</p>
                    </User>
                    :
                    <Button onClick={signIn}>로그인</Button>
            }
        </Container>
    )
}

const Container = styled.div`

`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 12px;
    }
  p{
    font-size: 13px;
  }
`;

export const Button = styled.div`
  width: 80px;
  height: 30px;
  background: #18f;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  border-radius: 4px;
  font-size: 13px;
`;

export default Member;