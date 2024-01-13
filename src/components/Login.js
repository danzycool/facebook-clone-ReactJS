import React from 'react';
import { Button } from '@material-ui/core';

import "../css/Login.css";
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Login = () => {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <div className='login_logo'>
                <img
                    src="/facebook_logo.png"
                    alt="logo"
                />
                <img
                    src="/facebook.png"
                    alt="facebook"
                    style={{ width: 120, height: "auto" }}
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login