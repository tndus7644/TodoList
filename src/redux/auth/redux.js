const initialState = {
    isLoggedIn: false,
    profileObj: undefined
}

export const Action = {
    Types: {
        UPDATE_STATE: 'AUTH/UPDATE_STATE'
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
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