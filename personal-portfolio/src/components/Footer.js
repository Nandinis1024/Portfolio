import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/nandiniPic.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6} style={{marginTop:'20px'}}>
            {/* <img src={logo} style={{width:'150px',  borderRadius: '50%'}}  alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className=" text-center text-sm-end">
            <p>(+91) 9599306226</p>
            <p>nandini.sunil1024@gmail.com</p>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
