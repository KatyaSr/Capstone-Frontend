import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <TextField
        label="Username"
        required
        fullWidth
        name="username"
        autoComplete="username"
        autoFocus
      />
      <TextField
        label="Password"
        type="password"
        required
        fullWidth
        name="password"
        autoComplete="current-password"
        autoFocus
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
        Sign In
      </Button>
      <Grid container>
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
      </Grid>
    </div>
  );
}

export default App;
