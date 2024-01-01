import React from 'react'
import ProjectSlider from './ProjectSlider'

const Features = () => {
  return (
    <>
    <div className="featuresBlock">
            <div className="left-card">
                <div className="card text-center">
                    <h3 className="spec">50+</h3>
                    <p className="spec-descp">Completed Projects</p>
                </div>
                <div className="card text-center">
                    <h3 className="spec">2+ <span className="sm-text">Years</span></h3>
                    <p className="spec-descp">Experience</p>
                </div>
                <div className="card text-center">
                    <h3 className="spec">10+ </h3>
                    <p className="spec-descp">Satisfied Clients</p>
                </div>
                <div className="card text-center">
                    <h3 className="spec">Msc(IT) </h3>
                    <p className="spec-descp">2020</p>
                </div>
            </div>
            <div className="right-card">
            <div className="card">
                <ProjectSlider />
            </div>
            </div>
        </div></>
  )
}

export default Features