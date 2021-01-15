import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from "axios";
import TodoItems from "./TodoItems";

const List = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    },[])

    const getTodos = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(result.data);
    }


    return(
        <Container>
            {todos.map((item, index) => <TodoItems key={item.id} {...item} />)}
        </Container>
    )
}

const Container = styled.div`

`;

export default List;