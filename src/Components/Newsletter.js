import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import navIcon4 from "../Assets/img/nav-icon4.svg";
import navIcon5 from "../Assets/img/nav-icon5.svg";
import navIcon6 from "../Assets/img/nav-icon6.svg";
import navIcon7 from "../Assets/img/nav-icon7.svg";
import navIcon8 from "../Assets/img/nav-icon8.svg";
import navIcon9 from "../Assets/img/nav-icon9.svg";
import navIcon10 from "../Assets/img/nav-icon10.svg";
import navIcon11 from "../Assets/img/nav-icon11.png";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
        <h1 className="tinos-bold">Socials</h1>
          <Row>
            <Col md={6} xl={7} className="mx-auto">
            <div className="social-icon">
              <a href="https://github.com/austinxviii" target="_blank"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://leetcode.com/u/austinnnn10/" target="_blank"><img src={navIcon6} alt="Icon" /></a>
              <a href="https://replit.com/@austinxviii" target="_blank"><img src={navIcon7} alt="Icon" /></a>
              <a href="https://www.kaggle.com/austin1888" target="_blank"><img src={navIcon11} alt="Icon" /></a>
              <a href="https://in.pinterest.com/austinxviii/" target="_blank"><img src={navIcon8} alt="Icon" /></a>
              <a href="https://codeforces.com/profile/austinxviii" target="_blank"><img src={navIcon9} alt="Icon" /></a>
              <a href="https://x.com/austinxviii" target="_blank"><img src={navIcon10} alt="Icon" /></a>
              <a href="https://open.spotify.com/user/31ykuvfp6yaamvnit5qha2zfbmou?si=a6qPzwr9Qsa60NBVOb0xXQ" target="_blank"><img src={navIcon5} alt="Icon" /></a>
            </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}