import React from 'react';
import styled from 'styled-components';
import {AiOutlineMenu} from "react-icons/ai";
import {useHistory} from 'react-router-dom';

const Header = ({onClickMenu}) => {

    const history = useHistory();

    const navigate = (url) => {
        history.push(url);
    }

    return(
        <Container>
            <Logo>Logo</Logo>
            <Gnb>
                <Nav>
                    <NavItem onClick={() => navigate("/")}>
                        Home
                    </NavItem>
                    <NavItem onClick={() => navigate("/todos")}>
                        Todos
                    </NavItem>
                    <NavItem onClick={() => navigate("/photos")}>
                        Photos
                    </NavItem>
                    <NavItem onClick={() => navigate("/videos")}>
                        Videos
                    </NavItem>
                </Nav>
                <Button onClick={onClickMenu}>
                    <AiOutlineMenu/>
                </Button>
            </Gnb>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const NavItem = styled.div`
  padding: 0 20px;
  cursor: pointer;
`;

const Button = styled.div`
  margin-left: 40px;
  cursor: pointer;
`;

export default Header;