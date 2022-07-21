import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to = "/Home"> Home</Link>
            <Link to = "/profile/:username"> profile</Link>
            <Link to = "/Search"> search</Link>
            <Link to = "/SignIn"> SignOut</Link>

        </nav>
    );
};

export default Navbar;
