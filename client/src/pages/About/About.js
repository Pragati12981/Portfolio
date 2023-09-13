import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump'
const About = () => {
  return (
    <>
    <Jump>
      <div className='about' id="about">
      <div className='row'>
        {/* <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>

        
            <img src=".src/assets/images/WhatsApp Image 2023-09-10 at 22.34.17.jpeg" 
            alt="profile_pic"
            />
        </div> */}\
        {/* col-md-6 col-xl-6 col-lg-6 col-xs-12 */}
        <div className=' about-content'>
            <h1>About me</h1>
            <p col-md-6 col-xl-6 col-lg-6 col-xs-12>I'm a Pragati, a passionate and dedicated Full Stack Web Developer with a love for creating elegant and functional web applications.
            I am persistent, Hardworking and a curious learner. I like to work in a challenging environment.
            I'm always open to new opportunities, collaborations, and challenges. My academic journey in B-Tech computer science  has equipped me with a strong foundation in computer science and programming, which I have applied to various personal projects and coursework. 
            I am eager to continue learning and growing in the field of web development.
            </p>
        </div>
      </div>
    </div>
    </Jump>
    </>
  )
}

export default About
