import reac from "../assets/img/react.png";
import node from "../assets/img/node.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.png";
import express from "../assets/img/express.png";
import mysql from "../assets/img/MySQL.png";
import java from "../assets/img/java.png";
import postgres from "../assets/img/postgres3.png";
import spring from "../assets/img/spring-logo.png";
import bootstrap from '../assets/img/bootstrap.jpg'
import redux from "../assets/img/redux2.jpg";
import git from "../assets/img/git.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skils.css';

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
    <div className="fondo">
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="text-success">Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>

                              <div className="item">
                                <img src={reac} alt="Image" />
                                <h5>React js</h5>
                             </div>

                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>

                            <div className="item">
                                <img src={redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>

                            <div className="item">
                                <img src={spring} alt="Image" />
                                <h5>Spring</h5>
                            </div>

                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node js</h5>
                            </div>

                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express js</h5>
                            </div>

                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>

                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>

                            <div className="item">
                                <img src={postgres} alt="Image" />
                                <h5>Postgres</h5>
                            </div>

                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}
