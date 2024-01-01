"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MTimg from "../images/MT.png"
import ACTimg from "../images/ACT.png"
import Image from "@/node_modules/next/image";
import BascoPaints from "../images/BascoPaints.png"


const ProjectSlider = () => {
  const Projects = [
    {
      id: 1,
      name: "MT",
      img: MTimg,
    },
    {
      id: 2,
      name: "ACT",
      img: ACTimg,
    },
    {
        id: 3,
        name: "BascoPaints",
        img: BascoPaints,
        
    }
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false
  };

  return (
    <>
    <h3 className="title-projects text-center">Featured Projects</h3>
      <div className="projectSlider">
        <Slider {...settings}>
          {Projects.map((project, index) => (
            <div className="project-slide" key={index}>
              <Image src={project.img} alt="project" height={400} width={500}/>
            </div>
          ))}
        </Slider>
        
      </div>
      <div className="btn-block text-center">
        <a href="/" className="view-all">View All Projects</a>
        </div>
    </>
  );
};

export default ProjectSlider;
