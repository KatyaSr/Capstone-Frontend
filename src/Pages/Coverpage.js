import React from "react";
import {Link} from "react-router-dom";

function Coverpage() {
    return <div className="columnContainer">
        THIS IS Coverpage PAGE
        <Link to = "/SignIn">
            SignIn
        </Link>
        </div>;
}

export default Coverpage;