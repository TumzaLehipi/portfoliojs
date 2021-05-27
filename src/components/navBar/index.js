import React from 'react';  

import { Link } from "react-router-dom";

import { Container } from "./styles";

import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { ReactComponent as Skills } from "../../assets/skills.svg";
import { ReactComponent as Contact } from "../../assets/contact.svg";


function Navbar() {
    return (
        <Container>
                <nav>
                    <label className="logo">lol</label>
                    <label id = "icon">
                        <i className = "fas fa-bars"></i>
                    </label>
                    <ul>
                        <div className="items active">
                            <li><Link to ='/'> Home </Link></li>
                            <li><Link to ='/skills' > Skills</Link></li>
                            <li><Link to ='/about' > About</Link></li>
                            <li><Link to = '/contact' > Contact</Link></li>    
                        </div>
                    </ul>
                </nav>
        </Container>
    )
}

export default Navbar;
