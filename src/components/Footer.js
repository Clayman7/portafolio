import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github7.png';
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import './NavBar.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './Footer.css';

export const Footer = () => {

  const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Pincha en los enlaces","Escribeme a mi correo" ];
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
    <div className="pp" id='footers'>
    <footer className="footer">
    <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
              <TrackVisibility>  
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h1><strong>Contacto</strong></h1>
                  <br></br>
                  <br></br>
                    <h2>{`¡Vamos a contactar!`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Pincha en los encales","Escribeme a mi correo"]'><span className="wrap">{text}</span></span></h2>
                      <p class="text-info"><strong>Correo: clayman.asg@gmail.com</strong></p>  
                  </div>}
                </TrackVisibility>
              </Col>
              <Col size={12} sm={6} >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/alan-salinas-garc%C3%ADa-572b6a257/" target='_blank'><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Clayman7" target='_blank'><img src={navIcon2} alt="" /></a>   
            </div>
          </Col> 
          
              <Col xs={24} md={6} xl={5}>
                <TrackVisibility>
                
               </TrackVisibility> 
              </Col>
            </Row>
          </Container>


          </footer>
          </div>
  )
}
