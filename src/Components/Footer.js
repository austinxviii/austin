import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../Assets/img/retro/austinxviii-logo-white.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} className="img-austinxviii" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}