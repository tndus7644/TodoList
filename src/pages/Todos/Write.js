import React,{useState} from 'react';
import styled from 'styled-components';
import {Button} from "./List";
import axios from "axios";

const Write = ({history}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async () => {
        await axios.post('http://localhost:3400/todos', {
            title,
            description
        })

        history.push('/todos');
    }

    return(
        <Container>
            <label>
                <span>제목</span>
                <input type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                <span>설명</span>
                <input type="text"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <Button onClick={onSubmit}>저장하기</Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  label{
    width: 500px;
    margin: 20px 0;
    input{
      height: 40px;
      width: 500px;
      display: block;
      padding: 8px;
      border: 1px solid #ddd;
    }
  }
`;



export default Write;