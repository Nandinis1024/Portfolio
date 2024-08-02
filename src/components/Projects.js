import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PlacePrep.png";
import projImg2 from "../assets/img/CogniScript.png";
import projImg3 from "../assets/img/NextLink.png";
import projImg4 from "../assets/img/YelpCamp.png";
import projImg5 from "../assets/img/ProFit.jpg";
import projImg6 from "../assets/img/Internship1.png";
import projImg7 from "../assets/img/certificate1.png";
import projImg8 from "../assets/img/certificate2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PlacePrep",
      description: "Remote Code Execution Platform with AI Docs, Interviews, Community and inbuilt Chatbot for Doubt Solving.",
      imgUrl: projImg1,
      gitHub: 'https://github.com/Nandinis1024/placeprep',
      link: 'https://drive.google.com/file/d/1-4UwJmeByRD4D7N_OJ5d-5hjAUHS3XMP/view?usp=sharing'
    },
    {
      title: "CogniScript",
      description: "AI driven platform that Automates test creation with AI enhanced quizes and facilitates course selling and purchasing.",
      imgUrl: projImg2,
      gitHub:'#',
      link: '#'
    },
    {
      title: "NextLink",
      description: "User Friendly dynamic public profile creation application that enables users to track engagement and visitor traffic to monitor their online presence.",
      imgUrl: projImg3,
      gitHub:'https://github.com/Nandinis1024/nextlink',
      link: 'https://nextlink.vercel.app/'
    },
    {
      title: "YelpCamp",
      description: "A full stack web application that allows users to create, edit, and delete campgrounds and comments.",
      imgUrl: projImg4,
      gitHub:'https://github.com/Nandinis1024/yelpcamp',
      link: 'https://drive.google.com/file/d/1lsMnaG7bnwgxlUQqMQmePOSylKoSo4wx/view?usp=sharing'
    },
  ];
  const experience = [
    {
      title: "Software Developer Intern @ Biz Staffing Comrade",
      description: "Developed and worked on 10+ microservices for the company to automate hiring process and manage their employees.",
      imgUrl: projImg6,
      gitHub:'#',
      link: '#'
    },
    {
      title: "Freelance",
      description: "A full stack Freelance fitness portfolio website for my clients who want to  give personal training and increase their online presence.",
      imgUrl: projImg5,
      gitHub: 'https://github.com/Nandinis1024/fitness',
      link: '#'
    },
  ];

  const certificates = [
    {
      title: "Certificate of Completion",
      description: "Completed 100+ hours of training in the fundamentals of Computer Science and Data Structures by Harvard University",
      imgUrl: projImg7,
      gitHub:'#',
      link: '#'
    },
    {
      title: "Certificate of Achievement",
      description: "Achieved 1st position in the district Hackathon. Developed a Blockchain based centralized voting system in Python",
      imgUrl: projImg8,
      gitHub:'#',
      link: '#'
    },
  ]

  return (
    <section className="project" id="projects">
      <Container style={{cursor:'pointer'}}>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a dedicated software developer, I have engineered a diverse array of projects including the ones below. My expertise spans React.js, Node.js, TypeScript and Tailwind CSS, enabling me to create seamless, efficient, and visually appealing user experiences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Internships and Freelance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates and Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        {
                          experience.map((experience, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...experience}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
