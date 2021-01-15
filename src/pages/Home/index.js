import React,{useState} from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../Styled/Layout.Styled";
import {Popup} from "../../components/Popup";

const Home = () => {

    const [count, setCount] = useState(5);
    const [popup, setPopup] = useState(false);

    const PopupHandle = () => {
        setPopup(!popup);
    }

    const CountUp = () => {
        setCount(v => v + 1);
    }

    const CountDown = () => {
        setCount(v => v - 1);
    }


    return(
        <Container>
            <ContentContainer>
                <h1>Count</h1>
                <Count>{count}</Count>
                <ButtonGroup>
                    <Button onClick={CountUp}>Up</Button>
                    <Button onClick={CountDown}>Down</Button>
                </ButtonGroup>
            </ContentContainer>
            <ContentContainer>
                <h1>Popup</h1>
                <ButtonGroup>
                    <Button onClick={PopupHandle}>공지사항</Button>
                </ButtonGroup>
                {
                    popup &&
                    <Popup PopupHandle={PopupHandle}
                           Title={"배송 지연 안내"}
                           Description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, officia!"}
                    />
                }
            </ContentContainer>
        </Container>

    )
}

const Container = styled.div`
  text-align: center;
  padding: 80px 0;
`;

const Count = styled.div`
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 140px;
  height: 40px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    background: #f3f3f3;
  }

  &:active {
    background: #ececec;
  }
`;

export default Home;