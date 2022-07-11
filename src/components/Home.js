import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return <div>
        THIS IS HOME PAGE
        <div>
            <Link to="/signin">Sign In</Link>
            <Link to="/profile">Profile</Link>
        </div>
        </div>;
}

export default Home;