import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';

function Search() {
    let navigate = useNavigate();
    return (
        <div className='searchcontainer'>
        <div className="columnContainer"> 
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
            <button onClick = {() =>navigate('/Result')}>
                Search
            </button>
            <Link to = "/Home">
                back to home
            </Link>
        </div>
        </div>
    );
}

export default Search;