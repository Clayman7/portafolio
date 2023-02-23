import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import { Navbar, Nav} from "react-bootstrap";
import './NavBar.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () =>{
  //esto viene de NavBar---------------------
  const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
      //-------------------------------------------

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Alan Salinas García","Full Stack Developer" ];
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
        <div className="bb">
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
              <TrackVisibility>  
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1 className="text-success">{`¡Hola! Soy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Alan Salinas","Full Stack Developer"]'><span className="wrap">{text}</span></span></h1>
                      <p className="text-success"><strong>¡Hola! mi nombre es Alan y Soy un Desarrollador Full Stack 
                      que codicia resolver problemas, deseo programar cosas nuevas. Quiero devorar el mundo 
                      de la tecnología, aportaré algo de mi en cada código. Me gusta el compañerismo y las metas. 
                      Soy eficiente y autodidacta. Estudioso de la filosofía y programador de tiempo completo.</strong></p>
                  
                       <Nav className="ms-auto">
                  
                     <Nav.Link href="#footers" className={activeLink === 'footers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('footers')}>
                        <button>Contactame<ArrowRightCircle size={25} /></button>
                     </Nav.Link>
                     </Nav>   
            
                      
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
               </TrackVisibility> 
              </Col>
            </Row>
          </Container>
        </section>
        </div>
      )
}