import React from 'react'
import { useContext } from 'react'
import { sender } from '../../Store'
import { BsMoonStarsFill, BsFillCloudSunFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {

    let {mode, setMode} = useContext(sender)

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${mode?"dark":"light"} fixed-top`}>
                <div className="container-fluid">
                    <a className='navbar-brand logoname' href="#">AvantiUrkude</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <a className={`nav-link active text-${mode?"light":"dark"}`} aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className={`nav-link text-${mode?"light":"dark"}`} href="#About">About</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className={`nav-link text-${mode?"light":"dark"}`} href="#Skills">Skills</a>
                            </li><li className="nav-item px-2">
                                <a className={`nav-link text-${mode?"light":"dark"}`} href="#Contact">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <button className='btn text-black btn-outline-warning' onClick={()=> setMode(!mode)}>{mode?<BsFillCloudSunFill className={`text-${mode?"light":"dark"}`} />:<BsMoonStarsFill />}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar