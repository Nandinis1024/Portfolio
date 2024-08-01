import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import img1 from "../assets/img/c++.png";
import img2 from "../assets/img/python.jpeg";
import img3 from "../assets/img/javascript.svg";
import img4 from "../assets/img/reactjs.svg";
import img5 from "../assets/img/nodejs.svg";
import img6 from "../assets/img/next-js.png";
import img7 from "../assets/img/mongodb.svg";
import img8 from "../assets/img/typescript.svg";
import img9 from "../assets/img/aws.svg";
import img10 from "../assets/img/google-cloud.svg";
import img11 from "../assets/img/Github-desktop-logo-symbol.svg.png";
import img12 from "../assets/img/sql.svg";
import img13 from "../assets/img/django.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                        <h2>Skills</h2>
                        <div style={{maxWidth:'800px'}}>
                        <p>Skilled in modern web development technologies including <b style={{color:'white'}}>React, Node.js, and Tailwind CSS </b>, with a strong emphasis on creating responsive, user-friendly interfaces.<br></br> Proficient in programming languages such as JavaScript, TypeScript, and Python, with experience in building <b style={{color:'white'}}> robust backend systems and APIs </b> using Express.js and MongoDB.</p>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={img3} alt="Image" />
                                <h5>javaScript</h5>
                            </div>
                            <div className="item">
                                <img src={img4} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={img5} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            
                            <div className="item">
                                <img src={img1} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={img6} alt="Image" />
                                <h5>NextJs</h5>
                            </div>
                            <div className="item">
                                <img src={img7} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={img8} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={img9} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={img10} alt="Image" />
                                <h5>Google Cloud</h5>
                            </div>
                            <div className="item">
                                <img src={img11} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={img12} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={img13} alt="Image" />
                                <h5>Django</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
