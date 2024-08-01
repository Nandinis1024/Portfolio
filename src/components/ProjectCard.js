import { FaGithub } from "react-icons/fa";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHub, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{width:'420px', height:'250px'}}>
        <img src={imgUrl} style={{width:'420px', height:'250px'}} />
        <div className="proj-txtx" style={{maxWidth:'300px'}}>
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{display: 'flex', justifyContent:'space-evenly', marginTop:'10px' }}>
          <a href={gitHub} target="_blank" className="proj-btn" style={{color:'white', fontSize:'22px'}}>
            <FaGithub />
          </a>
          <a href={link} target="_blank" className="proj-btn" style={{color:'white', fontSize:'22px'}}>
            Link
            </a> 
          </div>
        </div>
      </div>
    </Col>
  )
}
