import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/kisspng-document-management-system-electronic-document-com-5c89a63ecf5174.0355242315525248628492-removebg-preview.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Programmer","Software Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <Router> 
    <section className="banner" id="home">
      <Container style={{marginBottom:'70px'}}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1>{`Hi! I'm Nandini Sharma`} </h1>
                <h1 className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Programmer","Software Developer"]'><span className="wrap">{text}</span></h1>
                  <p>Welcome to my portfolio! I am a passionate web developer and programmer with a <b style={{color:'white'}}>7oo+ problems solved on LeetCode.</b> With expertise in more than <b style={{color:'white'}}>11+ skills</b> and programming languages, and experience in multiple hackathons, I strive to deliver innovative and efficient solutions in every project I undertake.</p>
                  <HashLink smooth to='#connect'>
                  <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}
