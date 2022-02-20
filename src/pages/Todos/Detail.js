import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Button} from "./List";

const Detail = (props) => {

    const {
        history,
        location,
        match
    } = props

    const id = match.params.id;

    const [todo, setTodo] = useState({});

    useEffect(() => {
        getTodoById();
    },[]);

    const onDelete = async () => {
        await axios.delete(`http://localhost:3400/todos/${id}`);
        history.push('/todos')
    }

    const getTodoById = async () => {
        const result = await axios.get(`http://localhost:3400/todos/${id}`);
        setTodo(result.data);
    }


    return(
        <Container>
            <Content>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
                <p>{todo.completed}</p>
                <p>{todo.createdAt}</p>
            </Content>
            <ButtonDelete onClick={onDelete}>삭제하기</ButtonDelete>
        </Container>
    )
}

const Container = styled.div`
  padding: 15px;
`;

const Content = styled.div`
  text-align: center;
    h1{
      margin: 10px 0;
    }
  p{
    line-height: 1.7;
  }
`;

const ButtonDelete = styled(Button)`
    background: #ff5252;
`;


export default Detail;