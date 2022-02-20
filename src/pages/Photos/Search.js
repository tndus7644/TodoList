import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../../components/Photos/PhotoList";
import SearchBox from "../../components/SearchBox";
import {useSelector} from "react-redux";
import {UNSPLASH_CLIENT_ID} from "../../constants";
import {useActionCreators} from "../../redux/actionCreators";

const Search = ({match}) => {

    const query = match.params.query;
    const {searchResult} = useSelector(state => state.photo);

    const {photoActions} = useActionCreators();

    useEffect(() => {
        searchPhoto();
    }, [query])

    const searchPhoto = () => {
        photoActions.searchPhoto({
            per_page: 15,
            query,
            client_id: UNSPLASH_CLIENT_ID
        })
    }


    if (searchResult?.results?.length === 0) return '검색 결과가 없습니다';


    return (
        <Container>
            <SearchBox/>
            <PhotoList photos={searchResult?.results}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;