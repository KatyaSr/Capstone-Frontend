import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Profile() {
    let navigate = useNavigate();
    let { username } = useParams();
    return <div className="sign-in-container"> 
    THIS IS profile PAGE OF {username};
    <div>
        Nickname:
        <div className='container-textfield'>
            <TextField
                label="Nickname"
            />
        </div>
    </div>
    <div>
        Email:
        <div className='container-textfield'>
            <TextField
                label="Email"
            />
            </div>
    </div>
    <div>
        
        Location:
        <div className='container-textfield'>
            <TextField
                label="Location"
            />
            </div>
    </div>
    <div>

        Contact:
        <div className='container-textfield'>
            <TextField
                label="Contact"
            />
            </div>
    </div>
    <Button type="submit" onClick = {() =>navigate('/Home')} variant="contained" sx={{ mt: 2 }}>
        Home
    </Button>
    </div>;
}

export default Profile;