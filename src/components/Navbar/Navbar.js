import React, { useContext } from 'react';
import './Navbar.css'
import lightLogo from '../../resourses/lightlogo.png'
import darkLogo from '../../resourses/Logo.png'
import search from '../../resourses/Group 2.png'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = (props) => {
    const isDark = props.dark;
    let history = useHistory()
    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
    }
    const [user, setUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" style={{ cursor: 'pointer' }} onClick={handleClick}>
                <img src={isDark ? darkLogo : lightLogo} alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {
                    !isDark &&
                    <div className="input-icon">
                        <img src={search} alt="" />
                        <input className="form-control mr-sm-2" type="search" placeholder="Search your Destination..." aria-label="Search" />
                    </div>
                }

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className={isDark ? "dark nav-link" : "nav-link"} href='#'>News <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className={isDark ? "dark nav-link" : "nav-link"} href="#">Destination</a>
                    </li>
                    <li className="nav-item">
                        <a className={isDark ? "dark nav-link" : "nav-link"} href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className={isDark ? "dark nav-link" : "nav-link"} href="#">Contact</a>
                    </li>
                    {
                        user.first
                            ? <li className="nav-item">
                                <a className={isDark ? "dark nav-link nav-name" : "nav-link nav-name"} href="#">{user.first}</a>
                            </li>
                            : <li className="nav-item nav-login-item">
                                <a id='navbar__login-btn' className={isDark ? "dark nav-link" : "nav-link"} onClick={() => history.push('/login')}>Login</a>
                            </li>
                    }
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
