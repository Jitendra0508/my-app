import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from '../src/images/logo.png';
const Header = () => {
  
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);

    return (
        <>
            <header className={scroll ? "sticky_header" : "main_header"}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand logo" to="#">
                            <img src={logo} alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse menu justify-content-between" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" to="#"> Product Tour</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  " to="#">Pricing </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  " to="#">Roadmap </a>
                                </li>                                            
                            </ul>
                            <div className="login_side">
                                <a className="login" to="#">log in</a>
                                <a className="try_now" to="#">try now</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;