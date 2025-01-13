import React, {useState} from "react"; //importing useState hook from react library
import {Link} from "react-router-dom"; //importing Link component from react-router-dom library
import "../style/nav.scss"

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen);
    };

return (
        <nav>
            <div className={`ham_nav ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <div className={`Line ${isOpen ? 'Line' : ''}`}></div>
                <div className={`Line ${isOpen ? 'Line' : ''}`}></div>
                <div className={`Line ${isOpen ? 'Line' : ''}`}></div>
            </div>

            <div className="title"> Ponder </div>

            <ul className={isOpen ? 'open' : ''}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/SignIn">Sign In</Link></li>
            </ul>
        </nav>
    );
};