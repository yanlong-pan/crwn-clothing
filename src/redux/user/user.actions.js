import UserAcitonTypes from './user.types'

export const googleSignInStart = () => ({
    type: UserAcitonTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = emailAndPassword => ({
    type: UserAcitonTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccess = user => ({
    type: UserAcitonTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signInFailure = error => ({
    type: UserAcitonTypes.SIGN_IN_FAILURE,
    payload:error
})

export const checkUserSession = () => ({
    type: UserAcitonTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserAcitonTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserAcitonTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = error => ({
    type: UserAcitonTypes.SIGN_OUT_FAILURE,
    payload:error
})