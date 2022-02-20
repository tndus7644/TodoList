import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import TodoItems from "../../components/Todos/TodoItems";

const List = ({history}) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    },[])

    const getTodos = async () => {
        const result = await axios.get("http://localhost:3400/todos");
        setTodos(result.data);
    }

    const navigate = (url) => {
        history.push(url)
    }


    return(
        <Container>
            {todos.map((item, index) => <TodoItems key={item._id} {...item} navigate={() => navigate(`/todos/detail/${item._id}`)}/>)}
            <Button onClick={() => navigate('/todos/write')}>추가하기</Button>
        </Container>
    )
}

const Container = styled.div`

`;

export const Button = styled.div`
  width: 150px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  background: #18f;
  margin: 40px auto;
  display: flex;
  align-items: center;  
  justify-content: center;
  cursor: pointer;
  user-select: none;
`;

export default List;