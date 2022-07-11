import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const SignIn = (props) => {
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
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Sign In
            </Button>
            <div className='options-container'>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    Sign Up
                </Link>
                </Grid>
            </div>
        </div>
    );
}

export default SignIn;