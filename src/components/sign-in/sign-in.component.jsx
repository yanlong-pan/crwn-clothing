import React, { Component } from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password)
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value, });
    }

    render() {
        const {googleSignInStart} = this.props
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>SIgn in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                        <FormInput 
                            name='email' 
                            type='email' 
                            value={this.state.email} 
                            label='Email'
                            handleChange={this.handleChange}
                            required 
                        />
                    
                        <FormInput 
                            name='password' 
                            type='password' 
                            value={this.state.password} 
                            label='Password'
                            handleChange={this.handleChange}
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
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn); 