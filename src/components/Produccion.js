import pro1 from "../assets/img/pro1.jpeg";
import pro2 from "../assets/img/pro2.jpeg";
import pro3 from "../assets/img/pro3.jpeg";
import pro4 from "../assets/img/pro4.jpeg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skils.css';

export const Produccion = () => {
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
                        <h2 className="lll">Produccion</h2>
                        <p className="text-secondary">Productora en diferentes proyectos en Badabun</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                        <div className="item">
                                <a href="https://www.facebook.com/watch/?v=735392134534026"><img src={pro1} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?ref=search&v=927424335331086&external_log_id=c0972ac6-cbe9-4c30-88ff-f4a4500349aa&q=badabun%20recuperando%20a%20mi%20ex"><img src={pro2} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?ref=search&v=2357559217739602&external_log_id=f6c67690-d23d-4016-b9fa-e1d098c65b59&q=dulce%20gipsy%20alien"><img src={pro3} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?ref=search&v=527723516047417&external_log_id=b1f260a5-d21d-408e-a8c6-a94a77900b1f&q=badabun%20le%20gustas%20a%20alguien"><img src={pro4} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
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
