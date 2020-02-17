import {UserAcitonTypes} from './user.types'
export const setCurrentUser = user => ({
    type: UserAcitonTypes.SET_CURRENT_USER,
    payload: user
})