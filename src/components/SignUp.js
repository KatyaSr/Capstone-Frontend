import React from "react";
import {Link} from "react-router-dom";


function SignUp() {
    return (
        <div className="columnContainer"> 
            THIS IS SignUp PAGE 
            <Link to = "/SignIn">
                back to signin
            </Link>
        </div>
    );
}

export default SignUp;