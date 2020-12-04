import React from 'react'
import './Profile.css'
import Fade from 'react-reveal/Fade'

import Photo from '../../asset/Group 8.png'
import Logo_fb from '../../asset/facebook.png'
import Logo_ig from '../../asset/instagram.png'
import Logo_wa from '../../asset/whatsapp.png'
import Logo_ldn from '../../asset/linkedin.png'
import CV from '../../asset/cv/cv.pdf'

export default function Profile() {
    return (
        <>
        <div className="jumbotron" id="about">
          <div className="container">
            <div className="row">
              <Fade left delay={500}>
                <div className="col-md text-white align-self-center">
                  <h1 className="pb-4">ANDI ADITYA PRATAMA</h1>
                  <p className="text-justify">Memiliki wawasan di bidang Teknik Instrumentasi Kontrol, UI/UX Design, dan Front End Develop. Mampu bekerja secara tim maupun individual dengan baik. Memiliki integritas tinggi dalam kejujuran, disiplin terhadap waktu dan semangat juang pantang menyerah</p>
                  <a className="btn font-weight-bold text-white" href={CV} download>
                    Download CV <i className="fas fa-download ml-2"></i>
                  </a>                
                </div>
              </Fade>
              <Fade right delay={500}>
                <div className="col-md">
                  <img src={Photo} alt="" style={{width: '100%'}} />
                  <div className="sosmed text-center d-flex justify-content-around">
                    <a href="https://id-id.facebook.com/" target="_blank"><img src={Logo_fb} alt="" /></a>
                    <a href="https://www.instagram.com/anditya_prat/" target="_blank"><img src={Logo_ig} alt="" /></a>
                    <a href="https://wa.me/6282127428189" target="_blank"><img src={Logo_wa} alt="" /></a>
                    <a href="https://www.linkedin.com/in/andi-aditya-pratama/" target="_blank"><img src={Logo_ldn} alt="" /></a>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        </>
    )
}
