const initialState = {
    sidebar: false
}

export const Action = {
    Types: {
        UPDATE_STATE: 'APP/UPDATE_STATE'
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