const initialState = {
    photos: [],
    searchResult: {}
}

export const Action = {
    Types: {
        UPDATE_STATE: 'PHOTO/UPDATE_STATE',
        SEARCH_PHOTO: 'SEARCH_PHOTO',
        GET_PHOTOS: 'GET_PHOTOS'
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),
        searchPhoto: (payload) => ({
            type: Action.Types.SEARCH_PHOTO,
            payload
        }),
        getPhotos: (payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}

export default reducer;