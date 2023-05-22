import React from 'react'
import './Contact.css'
import Title from '../Title'
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocationOn, MdEmail } from "react-icons/md";
// import { useFormik } from 'formik';
// import { dataSubmitSchema } from '../../schemas';
// import axios from 'axios';
import Form from './Form';


// let initialValues = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     message: ""
// }

const Contact = () => {

    // let {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    //     initialValues,
    //     validationSchema : dataSubmitSchema, 
    //     onSubmit: (values, action) => {

    //         console.log(values);
    //         axios.post("https://portfolio-website-83c38-default-rtdb.firebaseio.com/contact.json", values)
    //         action.resetForm();
    //     },
    // });
   

    return (
        <>
            <div className="container-fluid contact con-img" id='Contact'>
                <Title title="Contact" describe="Get in Touch" />
                <div className="row align-items-center" >
                    <div className="col-lg-6">
                        <h4 className='text-warning mb-4'>Message Me</h4>
                        <Form />
                    </div>
                    <div className="col-lg-6">
                        <h3 className='text-warning'>Contact Information</h3>
                        <p className='text-white'>Open for opportunities. Let's connect and build something awesome together.</p>


                        <ul className="listInfo">
                            <li>
                                <div className="personalContactInfo">
                                    <span className="infoIcon px-2 text-warning"><BsFillPersonFill /></span>
                                    <div className="mediaWrap px-2 mt-3">
                                        <h6 className="infoType text-warning">Name</h6>
                                        <p className='infoValue text-white'>Avanti Urkude</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="personalContactInfo">
                                    <span className="infoIcon px-2 text-warning"><MdLocationOn /></span>
                                    <div className="mediaWrap px-2 mt-3">
                                        <h6 className="infoType text-warning">Location</h6>
                                        <p className='infoValue text-white'>Pune, Maharashtra</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="personalContactInfo">
                                    <span className="infoIcon px-2 text-warning"><MdEmail /></span>
                                    <div className="mediaWrap px-2 mt-3">
                                        <h6 className="infoType text-warning">Email</h6>
                                        <p className='infoValue text-white'>avantiurkude279@gmail.com</p>
                                    </div>
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact