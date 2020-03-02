import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: {},
    isFetching: false,
    errorMessgae: undefined
}

const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessgae: action.payload
            }
            
        default:
            return state
    }
}

export default shopReducer