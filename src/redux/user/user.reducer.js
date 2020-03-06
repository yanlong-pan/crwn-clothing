import UserAcitonTypes from './user.types'
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserAcitonTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case UserAcitonTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserAcitonTypes.SIGN_IN_FAILURE:
        case UserAcitonTypes.SIGN_UP_FAILURE:
        case UserAcitonTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;