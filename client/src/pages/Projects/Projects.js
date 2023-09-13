import React from 'react'
import "./Projects.css"
import Fade from 'react-reveal/Fade'
const Projects = () => {
  return (
    <>
      <div className='container project' id="projects">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top recent projects</h2>
      <hr/>
      <p className='pb-3 text-center'>here are my top 3 recent project with live links and source code</p>
      <div className="row" id="ads">
      <Fade right>
          
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Techinfoyt Shopping Website
                    </h6>
                </div>
                <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
              </div>
            </div>
        </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Techinfoyt Shopping Website
                    </h6>
                </div>
                <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
              </div>
            </div>
        </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className='card-image-overly m-auto mt-3'>
                    <span className='card-detail-badge'>Node</span>
                    <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Techinfoyt Shopping Website
                    </h6>
                </div>
                <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
              </div>
            </div>
        </div>
        </Fade>
      </div>
      </div>
    
    </>
  );
};

export default Projects;
