import {takeLatest, put, all, call} from 'redux-saga/effects'
import UserAcitonTypes from './user.types'
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure} from './user.actions'
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth(userAuth){
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserAcitonTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserAcitonTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserAcitonTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut(){
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure())
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserAcitonTypes.SIGN_OUT_START, signOut)
}
export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
    ])
}