import React from 'react'
import './Footer.css'
import Logo from '../../asset/0,75x.png'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col text-center my-4">
                            <p>© 2020 by Andi Aditya Pratama. All Rights Reserved.</p>
                            <img src={Logo} alt="" className="mb-3"/>
                            <br/>
                            Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" target="_blank" className="text-muted text-decoration-none">Pixel perfect</a> from
                            <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" className="text-muted text-decoration-none"> www.flaticon.com</a> and <a href="https://fontawesome.com/" title="Font Awesome" target="_blank" className="text-muted text-decoration-none">Font Awesome</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
