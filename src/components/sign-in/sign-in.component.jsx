import React, { useState } from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'


const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({
        email:'', 
        password:''
    })
    const {email, password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const { value, name } = event.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>SIgn in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        label='Email'
                        onChange={handleChange}
                        required 
                    />
                
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        label='Password'
                        onChange={handleChange}
                        required 
                    />
                <div className='buttons'>
                    <CustomButton type='submit'>sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> 
                        Sign in with Google
                    </CustomButton>
                </div>

            </form>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn); 