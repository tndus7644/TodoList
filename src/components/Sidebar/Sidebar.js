import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {Button} from "../Header/Member";
import {useSelector} from "react-redux";
import {useGoogleLogout} from "react-google-login";
import {GOOGLE_CLIENT_ID} from "../../constants";
import {useActionCreators} from "../../redux/actionCreators";

const Sidebar = () => {

    const {sidebar} = useSelector(state => state.app);

    const {authActions} = useActionCreators();

    const onLogoutSuccess = () => {
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }

    const onFailure = () => {
        authActions.updateState({
            profileObj: undefined,
            isLoggedIn: false
        })
    }

    const {signOut, loaded} = useGoogleLogout({
        clientId:GOOGLE_CLIENT_ID,
        cookiePolicy:'single_host_origin',
        isSignedIn:true,
        onLogoutSuccess,
        onFailure
    })

    return (
        <Container className={cn("sidebar", {show:sidebar})}>
            Sidebar
            <Button onClick={signOut}>로그아웃</Button>
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
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-120%);
  transition: 0.3s;

  &.show {
    transform: none;
  }
`;

export default Sidebar;