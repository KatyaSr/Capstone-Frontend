import React from "react";
import {Link, useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    let navigate = useNavigate();
    return (
        <div className='sign-in-container'> 
            THIS IS SignUp PAGE 
            <div className='container-textfield'>
            <TextField
                label="Email"
                required
                name="email"
                fullWidth
                autoComplete="username"
                autoFocus
            />
            </div>
            <div className='container-textfield'>
            <TextField
                label="Password"
                type="password"
                required
                name="password"
                fullWidth
                autoComplete="current-password"
                autoFocus
            />
            </div>
            <div className='container-textfield'>
            <TextField
                label="ConfirmPassword"
                type="password"
                required
                name="password"
                fullWidth
                autoComplete="current-password"
                autoFocus
            />
            </div>            
            <Button type="submit" onClick = {() =>navigate('/SignIn')} variant="contained" sx={{ mt: 2 }}>
                Sign In
            </Button>
        </div>
    );
}

export default SignUp;
