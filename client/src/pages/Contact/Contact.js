import React,{useState} from 'react'
import {toast} from "react-toastify";
import axios from "axios"
import "./Contact.css"
import {BsGithub, BsLinkedin} from "react-icons/bs"
import Fade from "react-reveal/Fade"
const Contact = () => {
  const [name,setname] = useState("")
  const [email,setEmail] = useState("")
  const [msg,setMsg] = useState("")
  // handle submit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      if(!name || !email || !msg){
        toast.error("please provide all fields");

      }
      const res = await axios.post('/api/v1/portfolio/sendEmail',{name,email,msg})
      // validation success
      if(res.data.success){
        toast.success('res.data.message');
      }else{
        toast.error('res.data.message');
      }
    }
    catch(error){
      console.log(Error);
    }
  }
  return (
    <>
        <div className=" contact" id="contact" >
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                        className='image'
                      />
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                <Fade right>
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                    <div className='row'>
                    <div className='row'>
                    <h4>contact with 
                    <a href="https://www.linkedin.com/in/pragati-nagariya-067759205"><BsLinkedin color="blue" size={28} className="ms-2"/></a>
                    <a href="https://github.com/Pragati12981"><BsGithub color="black" size={28} className="ms-2"/></a>
                    {/* <SiGmail color="black" size={28} className="ms-2"/> */}
                    </h4>
                    </div>
                        
                  
              
                <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="" type="submit" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                     </div>
                   </div>
                 </div>
                 </Fade>
                </div>
               
               </div>
              </div>
            </div>

    </>
  )
}

export default Contact;
