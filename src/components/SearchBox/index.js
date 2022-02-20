import React,{useState } from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router";

const SearchBox = () => {

    const history = useHistory();
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/photos/search/${value}`)
    }


    return(
        <Container>
            <Form onSubmit={onSubmit}>
                <Input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <Button>검색</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`

`;

const Form = styled.form`
  padding: 40px 0;
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background: #aaa;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  user-select: none;
  border: 0;
`;

const Input = styled.input`
  height: 40px;
  display: block;
  flex:1;
  border: 1px solid #aaa;
  color: #333;
  padding: 8px;
  font-size: 14px;
`;

export default SearchBox;