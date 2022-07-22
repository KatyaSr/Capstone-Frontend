import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Link as NavigateLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const SignIn = (props) => {
    const navigate = useNavigate();
    return (
      
        <div className='sign-in-container'>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <div className='container-textfield'>
            <TextField
                label="Username"
                required
                name="username"
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
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button type="submit" onClick = {() =>navigate('/home')} variant="contained" sx={{ mt: 2 }}>
                Sign In
            </Button>
            <div className='options-container'>
                <Grid item xs>
                <NavigateLink to="/Forgotpassword" variant="body2">
                    Forgot password
                </NavigateLink>
                </Grid>
                <Grid item>
                <NavigateLink to="/SignUp" variant="body2">
                    Sign Up
                </NavigateLink>
                </Grid>
            </div>
        </div>
        
    );
}

export default SignIn;
//SignIn.js