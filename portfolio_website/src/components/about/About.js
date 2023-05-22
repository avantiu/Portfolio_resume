import React, { useEffect } from 'react'
import Title from '../Title'
import './About.css'
import { useContext } from 'react'
import { sender } from '../../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    let {mode, setMode} = useContext(sender)

    let data = [
        {
            title: "Name",
            info: "Avanti Urkude",
            id: 1
        }, {
            title: "Email",
            info: "avantiurkude279@gmail.com",
            id: 2
        }, {
            title: "Availability",
            info: "Open to work",
            id: 3
        }, {
            title: "Location",
            info: "Pune, Maharashtra",
            id: 4
        }
    ]

    return (
        <>
            <div className={`container-fluid p-4 about bg-${mode?"black":"white"}`} id="About">
                <Title title="About Me" describe="Know me More" />
                <div className="row align-items-center">
                    <div className="col-md-3 py-4">
                        <img src="/images/about/pexels-christina-morillo-1181292.jpg" alt="" className='p-4' width="100%" height="350vh" style={{ borderRadius: "50%" }} />
                    </div>
                    <div className="col-md-9">
                        <h1 className='text-warning' data-aos="fade-right">Hi, I'm Avanti</h1>
                        <hr className='text-warning' width="30%"/>
                        <p className={`py-4 text-${mode?"light":"dark"}`}>Front End Developer building and maintaining responsive websites in collaborative environment, punctual and passionate about learning, I enjoy developing simple, clean and sick websites that provide real value to the end user.</p>
                        <div className="row">
                        {
                        data.map((e) => {
                            return (
                                <div className="col-sm-6 col-md-3 pt-4" key={e.id}>
                                    <div className={`card border-warning bg-${mode?"black":"white"}`}>
                                    <div className={`text-center text-${mode?"light":"dark"} p-1`}>{e.title}</div>
                                    <div className="align-items-center text-center cards mt-2">
                                        <p className={`card-title text-${mode?"light":"dark"}`}>{e.info}</p>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default About