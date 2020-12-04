import React from 'react'
import Fade from 'react-reveal/Fade'

import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import ProjectList from '../ProjectList/ProjectList'

export default function Home() {
    return (
        <>
            <Navbar/>
            <Profile />
            <div className="container" id="main" style={{paddingTop: 100}}>
                <Fade bottom delay ={1500}>
                    <Main/>
                </Fade>
            </div>
            <div className="container project" id="project" style={{paddingTop: 100}}>
                <Fade bottom>
                    <ProjectList/>
                </Fade>
            </div>
            <Footer/>
        </>
    )
}
