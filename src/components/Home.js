import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return <div className="columnContainer">
        THIS IS HOME PAGE
        <div>
            <Link to="/profile">Profile</Link>
        </div>
        <Link to = "/SignIn">
            back to signin
        </Link>
        </div>;
}

export default Home;