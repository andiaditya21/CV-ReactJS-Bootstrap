import React from 'react'
import Main from '../Main/Main'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'

export default function Home() {
    return (
        <>
            <Navbar/>
            <Profile />
            <div className="container" style={{paddingTop: 60}}>
                <Main/>
            </div>
        </>
    )
}
