import redac1 from "../assets/img/redac1.jpeg";
import redac2 from "../assets/img/redac2.jpeg";
import redac3 from "../assets/img/redac3.jpeg";
import redac4 from "../assets/img/redac4.jpeg";
import redac5 from "../assets/img/redac5.jpeg";
import redac6 from "../assets/img/redac6.jpeg";
import redac7 from "../assets/img/redac7.jpeg";
import redac8 from "../assets/img/redac8.jpeg";
import redac9 from "../assets/img/redac9.jpeg";
import redac10 from "../assets/img/redac10.jpeg";
import redac11 from "../assets/img/redac11.jpeg";
import redac12 from "../assets/img/redac12.jpeg";
import redac13 from "../assets/img/redac13.jpeg";
import redac14 from "../assets/img/redac14.jpeg";
import redac15 from "../assets/img/redac15.jpeg";

import redac16 from "../assets/img/redac16.jpeg";

import redac17 from "../assets/img/redac17.jpeg";
import redac18 from "../assets/img/redac18.jpeg";
import redac19 from "../assets/img/redac19.jpeg";
import redac20 from "../assets/img/redac20.jpeg";
import redac21 from "../assets/img/redac21.jpeg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skils.css';

export const Redaccion = () => {
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
                        <h2 className="lll">Redacción</h2>
                        <p className="text-secondary">Redacción para medios tales como Baja News y Badabun</p>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                        <div className="item">
                                <a href="https://bajanews.mx/noticias/6080/Niurka-y-Maryfer-Centeno-protagonizan-pelea-en-programa-en-vivo"><img src={redac1} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/6904/Eduin-Caz-y-su-toxica-relacion-con-el-alcohol"><img src={redac2} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/8388/Siddhartha-responde-a-la-acusacion-por-abuso-sexual"><img src={redac3} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/13841/La-milagrosa-faja-de-Kim-Kardashian-salvo-la-vida-de-una-joven-en-tiroteo"><img src={redac4} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/5755/Maria-Felix-es-la-duena-del-metro-de-la-CDMX-conoce-la-historia"><img src={redac5} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/8248/CDMX-Integraran-chip-en-las-coladeras-para-evitar-robos"><img src={redac6} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/13579/Maestra-medico-a-nino-por-inquieto"><img src={redac7} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://bajanews.mx/noticias/9478/Mexico-recupera-la-pieza-olmeca-mas-buscada"><img src={redac8} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>



                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=273984201814704&set=a.164309412782184"><img src={redac9} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=291642953382162&set=a.164309412782184"><img src={redac10} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=188070107072781&set=a.164309412782184"><img src={redac11} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=193933259819799&set=a.164309412782184"><img src={redac12} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=289635543582903&set=a.164309412782184&locale=es_LA"><img src={redac13} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/photo/?fbid=189981166881675&set=a.164309412782184"><img src={redac14} alt="Image" /> </a>
                                <h5 className="text-info">Baja News</h5>
                            </div>

                            <div className="item">
                                <a href="https://www.facebook.com/watch/?v=497972188520306"><img src={redac15} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?ref=search&v=1105538743228184&external_log_id=7c147f91-d83d-41d5-8ddb-ba59e7946b9e&q=jennifer%20lopez%20badabun"><img src={redac16} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?v=2945728165647498"><img src={redac17} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>


                            <div className="item">
                                <a href="https://www.facebook.com/BadabunOficial/videos/1499644347173122"><img src={redac18} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?v=2113120452202872"><img src={redac19} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?v=307546361581193"><img src={redac20} alt="Image" /> </a>
                                <h5 className="text-info">Badabun</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/watch/?v=875318349799607"><img src={redac21} alt="Image" /> </a>
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
