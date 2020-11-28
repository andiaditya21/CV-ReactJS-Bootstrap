import React, { Component } from 'react'
import Project_01 from '../../asset/project/havefun.project 1.png'
import Project_02 from '../../asset/project/B10 Team Digital Kominfo.png'
import Project_03 from '../../asset/project/Unicycle1.jpeg'
import Project_04 from '../../asset/project/Unicycle Design.jpg'
import Project_05 from '../../asset/project/Obstacle avoiding robot.png'
import Project_06 from '../../asset/project/Biogas.jpg'
import Project_07 from '../../asset/project/Makribo.jpeg'
// import Project_08 from '../../asset/project/Makribo.jpeg'

import Project from './Project/Project'

export default class ProjectList extends Component {
    render() {
        return (
            <>
                <h5 className="text-white text-center">Project</h5>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators mb-0">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row p-3">
                                <Project
                                img={Project_01} 
                                title="UI / UX Design Web Panduan Rute Bus dalam Kota"
                                target="project_01"
                                />
                                <Project 
                                img={Project_02} 
                                title="UI Design Web Profile B10 Team DTS 2020"
                                target="project_02"
                                />
                                <Project 
                                img={Project_03} title="Unicycle Robot Using MPU6050 Sensor"
                                target="project_03"
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row project p-3">
                                <Project 
                                img={Project_04} title="Unicycle Robot Design"
                                target="project_04"
                                />
                                <Project 
                                img={Project_05} title="Obstacle Avoiding Robot Using Ultrasonic Sensor"
                                target="project_05"
                                />
                                <Project 
                                img={Project_06} title="Kontrol Temperature Wadah berdasarkan Reservoir Luar"
                                target="project_06"
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row project p-3">
                                <Project 
                                img={Project_07} title="Wirausaha Makanan Ringan 'Makribo'"
                                target="project_07"
                                />
                                {/* <Project 
                                img={Project_04} title="Unicycle Robot"
                                target="project_04"
                                />
                                <Project 
                                img={Project_05} title="Unicycle Robot Design"
                                target="project_05"
                                /> */}
                            </div>
                        </div>
                    </div>  
                </div>
        </>        
                
                    /* <Project
                    img={Project_01} 
                    title="UI / UX Design Web Panduan Rute Bus dalam Kota"
                    target="project_01"
                    />
                    <Project 
                    img={Project_02} 
                    title="UI / UX Design Web Profile B10 Team DTS 2020"
                    target="project_02"
                    />
                    <Project 
                    img={Project_06} title="Biogas"
                    target="project_06"
                    />
                    <Project 
                    img={Project_03} title="Obstacle Avoiding Robot"
                    target="project_03"
                    />
                    <Project 
                    img={Project_04} title="Unicycle Robot"
                    target="project_04"
                    />
                    <Project 
                    img={Project_05} title="Unicycle Robot Design"
                    target="project_05"
                    /> */
        )
    }
}
