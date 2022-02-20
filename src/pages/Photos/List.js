import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import PhotoList from "../../components/Photos/PhotoList";
import SearchBox from "../../components/SearchBox";
import {UNSPLASH_CLIENT_ID} from "../../constants";
import {useActionCreators} from "../../redux/actionCreators";

const List = () => {

    const {photos} = useSelector(state => state.photo)

    const {photoActions} = useActionCreators();

    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = () => {
        photoActions.getPhotos({
            per_page:15,
            client_id:UNSPLASH_CLIENT_ID
        })
    }


    return (
        <Container>
            <SearchBox/>
            <PhotoList photos={photos}/>
        </Container>
    )
}

const Container = styled.div`

`;


export default List;