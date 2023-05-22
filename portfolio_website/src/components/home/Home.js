import React from 'react'
import './Home.css'
import { useContext } from 'react'
import { sender } from '../../Store'


const Home = () => {

   let {mode, setMode} = useContext(sender)
   
   let resume = '/AvantiResume.pdf'

   let handleDownload = (url)=>{
        let filename = url.split('./').pop()
        let atag = document.createElement('a')
        atag.href=url
        atag.setAttribute('download', filename)
        document.body.appendChild(atag)
        atag.click();
        atag.remove();
   }

  return (
    <>
        <div className={`container-fluid home-img bg-${mode?"black":"white"}`} id="Home">
            <div className="row home align-items-center justify-content-center">
                <div className="col-md-6 mt-5 inner">
                    <h1 className='text-warning mt-5'>We articulate goal and set the strategy</h1>
                    <h4 className='text-white py-4'>For Growing Your Business</h4>
                    <button className='btn btn-outline-warning px-4 mb-4 download' onClick={()=>handleDownload(resume)}>Download CV</button>
                    
                </div>
                <div className="col-md-4">
                    <img src="/images/home/pexels-yan-krukau-4458418.jpg" className='p-4' alt="" width="100%" height="350vh" style={{borderRadius:"50%"}} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home