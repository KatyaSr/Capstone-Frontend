import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Search() {
    
    let navigate = useNavigate();
    return (
        <div className='sign-in-container'> 
            THIS IS Search PAGE 
            <div className='container-textfield'>
            <TextField
                label="Enter To Search"
                required
                name="email"
                fullWidth
                autoComplete="username"
                autoFocus
            />
            </div>
                <Button type="submit" onClick = {() =>navigate('/Search')} variant="contained" sx={{ mt: 2 }}>
                    Search
                </Button>
            
            <Link to = "/Home">
                back to home
            </Link>
        </div>
    );
}

export default Search;