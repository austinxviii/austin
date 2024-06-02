import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../Assets/img/header-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [  "Data Scientist", "ML Engineer", "Web Developer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
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
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                <h1 className="tinos-bold">{`Imagination carry us to worlds that never were`}</h1>
                <p className="tinos-regular">Sup? I'm Austin, a cs undergrad fueled by boundless curiosity. I like to tinker with AI, Machine Learning and Algorithms. At my core, I'm a techno-optimist who believes in the transformative potential of accelerating technological progress to reshape our world for the better. I also like to listen to hip-hop & play football.</p>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header Img"/>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}