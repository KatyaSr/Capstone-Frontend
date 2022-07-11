import React from "react";
import {Link} from "react-router-dom";

function Profile() {
    return <div className="columnContainer"> 
    THIS IS profile PAGE
    <Link to = "/Home">
        back to home
    </Link>
    </div>;
}

export default Profile;