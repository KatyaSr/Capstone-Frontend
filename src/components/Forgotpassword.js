import React from "react";
import {Link} from "react-router-dom";

function Forgotpassword() {
    return <div className="columnContainer">
        THIS IS Forgotpassword PAGE
            <Link to = "/SignIn">
                back to signin
            </Link>
        </div>;
}

export default Forgotpassword;