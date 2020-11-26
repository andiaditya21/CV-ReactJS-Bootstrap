import React from 'react'

import Logo from '../../asset/0,75x.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                    <a className="navbar-brand m-2" href="#">
                        <img src={Logo} alt="" />
                    </a>
                    <button className="navbar-toggler pr" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item p-2 active">
                        <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item p-2">
                        <a className="nav-link text-white" href="#about">About</a>
                        </li>
                        <li className="nav-item p-2">
                        <a className="nav-link text-white" href="#main">Main</a>
                        </li>
                        <li className="nav-item p-2">
                        <a className="nav-link text-white" href="#project">Project</a>
                        </li>
                        {/* <li className="nav-item p-2">
                        <a className="nav-link text-white" href="javascript:skill()">Skill</a>
                        </li> */}
                    </ul>
                    </div>
                </div>
             </nav>
        </>
    )
}
