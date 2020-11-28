import React from 'react'
import './Main.css'

import Education from './Education/Education'
import Skill from './Skill/Skill'
import Work from './Work/Work'

import Img_1 from '../../asset/figma.png' 
import Img_2 from '../../asset/adobe-xd.png' 
import Img_3 from '../../asset/web-programming.png' 
import Img_4 from '../../asset/office.png' 
import Img_5 from '../../asset/arduino.png' 
import Img_6 from '../../asset/SketchUp.png' 
import Img_7 from '../../asset/allen-bradley.png' 
import Img_8 from '../../asset/AdobePhotoshop.png' 

export default function Main() {
    return (
    <>
    <ul className="nav nav-tabs justify-content-center" role="tablist">
        <li className="nav-item mx-5" role="presentation">
            <a className="nav-link active" id="education-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Education</a>
        </li>
        <li className="nav-item mx-5" role="presentation">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Work Experience</a>
        </li>
        <li className="nav-item mx-5" role="presentation">
            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Skill</a>
        </li>
    </ul>
    <div className="tab-content" id="myTabContent">
        <div className="tab-pane text-white fade show active" id="home" role="tabpanel" aria-labelledby="education-tab"><Education/></div>
        <div className="tab-pane text-white fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Work/></div>
        <div className="tab-pane text-white fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div className="row skill my-4">
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_1} 
                    title="Figma"
                    progress="90%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_2} 
                    title="Adobe XD"
                    progress="90%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_3} 
                    title="HTML, CSS, JS (React JS)"
                    progress="80%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_4} 
                    title="Microsoft Office" progress="80%"
                    />
                </div>
            </div>
            <div className="row skill my-4">
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_5} 
                    title="Arduino" 
                    progress="75%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_6} 
                    title="SketchUp"
                    progress="75%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_7}
                    title="RSLogix 5000"
                    progress="70%"
                    />
                </div>
                <div className="d-flex col-md-3 justify-content-center">
                    <Skill 
                    img={Img_8} 
                    title="Adobe Photoshop"
                    progress="60%"
                    />
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
