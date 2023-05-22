import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

    let {register, handleSubmit, formState:{errors}, reset} = useForm()

    let getdata = (data)=>{
        axios.post("https://portfolio-website-83c38-default-rtdb.firebaseio.com/contact.json", data)
        console.log(data);
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(getdata)}>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="firstname" name='firstname' className="form-control" placeholder='First Name' {...register("Firstname", {required: "please enter your firstname!"})}  />
                            <p className='text-danger'>{errors.Firstname?.message}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" name='lastname' id="lastname" className="form-control" placeholder='Last Name' {...register("Lastname", {required: "please enter your lastname!"})}  />
                            <p className='text-danger'>{errors.Lastname?.message}</p>
                            {/* <label className="form-label" for="form3Example2">Last name</label> */}
                        </div>
                    </div>

                </div>


                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" name='email' placeholder='Email' {...register("Email",  {required: "please enter your email!"})}  />
                    <p className='text-danger'>{errors.Email?.message}</p>
                </div>


                <div className="form-outline mb-4">
                    <textarea className="form-control" id="message" rows="4" placeholder='Message' {...register("Message", {required: "please enter message!"})} ></textarea>
                    <p className='text-danger'>{errors.Message?.message}</p>
                    {/* <label className="form-label" for="form4Example3">Message</label> */}
                </div>


                <button type="submit" className="btn btn-outline-warning btn-block mb-4">Send Message</button>
            </form>
        </>
    )
}

export default Form