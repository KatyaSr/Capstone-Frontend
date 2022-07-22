import React from "react";
import {useParams, useNavigate} from "react-router-dom";

function Profile() {
    
    let navigate = useNavigate();
    let { username } = useParams();
    return <div className="columnContainer"> 
    THIS IS profile PAGE OF {username};
    <button onClick = {() =>navigate('/Home')}>
        Home
    </button>
    <div>
        Contact:
        
    </div>
    </div>;
}

export default Profile;