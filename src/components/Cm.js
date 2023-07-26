
import cm1 from "../assets/img/cm1.jpeg";
import cm2 from "../assets/img/cm2.jpeg";
import cm3 from "../assets/img/cm3.jpeg";
import cm4 from "../assets/img/cm4.jpeg";
import cm5 from "../assets/img/cm5.jpeg";
import cm6 from "../assets/img/cm6.jpeg";
import cm7 from "../assets/img/cm7.jpeg";
import cm8 from "../assets/img/cm8.jpeg";
import cm9 from "../assets/img/cm9.jpeg";
import cm10 from "../assets/img/cm10.jpeg";
import cm11 from "../assets/img/cm11.jpeg";
import cm12 from "../assets/img/cm12.jpeg";
import cm13 from "../assets/img/cm13.jpeg";
import cm14 from "../assets/img/cm14.jpeg";
import cm15 from "../assets/img/cm15.jpeg";
import cm16 from "../assets/img/cm16.jpeg";
import cm17 from "../assets/img/cm17.jpeg";
import cm18 from "../assets/img/cm18.jpeg";
import cm19 from "../assets/img/cm19.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skils.css';
import { Camera2 } from "react-bootstrap-icons";

export const Cm = () => {
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
                        <h2 className="lll">Comunity Managger</h2>
                        <p className="text-secondary">Creacion de parrillas de contenido y manejo de cuentas de portales de noticias como: Insomnio Guatemala, Trece noticias y Yo Amo Guatemala</p>
                        <h5 className="lll">SDP Noticias (actualidad) </h5>
<p className="text-secondary">Instagram
+3,9 Seguidores /// +22,1 Impresiones /// +5,6 Actividad en el perfil  /// +4,9 Visitas al perfil /// +38.4 Toques en el enlace externo
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                           
                            <div className="item">
                                <a href="https://www.instagram.com/p/CsSdIa_OB8N/?hl=es"><img src={cm1} alt="Image" /> </a>
                                <h5 className="text-info">2465 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Ctp1Qlwu1Nc/?hl=es"><img src={cm2} alt="Image" /> </a>
                                <h5 className="text-info">3498 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Cs2dtH8OOOY/?hl=es"><img src={cm3} alt="Image" /> </a>
                                <h5 className="text-info">5375 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Csl9wsQRodB/?hl=es"><img src={cm4} alt="Image" /> </a>
                                <h5 className="text-info">2248 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/CtuN2rKOKC7/?hl=es"><img src={cm5} alt="Image" /> </a>
                                <h5 className="text-info">2598 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/CtMhpBvuBBW/?hl=es"><img src={cm6} alt="Image" /> </a>
                                <h5 className="text-info">3236 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/CuDcw3cuEJQ/?img_index=1"><img src={cm7} alt="Image" /> </a>
                                <h5 className="text-info">2039 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Cu5AbmWvHzV/?hl=es"><img src={cm8} alt="Image" /> </a>
                                <h5 className="text-info">2158 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Cu2_WxbOM-L/?hl=es"><img src={cm9} alt="Image" /> </a>
                                <h5 className="text-info">4282 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/CuPRqUVu_-J/?hl=es"><img src={cm10} alt="Image" /> </a>
                                <h5 className="text-info">2112 Me gusta</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.instagram.com/p/Cu2e_CyrVgZ/?hl=es"><img src={cm11} alt="Image" /> </a>
                                <h5 className="text-info">2280 Me gusta</h5>
                            </div>


                            <div className="item">
                                <a href="https://www.facebook.com/yooamoguatemala"><img src={cm12} alt="Image" /> </a>
                                <h5 className="text-info">Yo Amo Guatemala</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/insomnioguatemala"><img src={cm13} alt="Image" /> </a>
                                <h5 className="text-info">Insomnio Guatemala</h5>
                            </div>
                            <div className="item">
                                <a href="https://www.facebook.com/13Noticias"><img src={cm14} alt="Image" /> </a>
                                <h5 className="text-info">Trece noticias</h5>
                            </div>
                            <div className="item">
                                <a href="https://drive.google.com/drive/folders/1U3Vkh3RzZJXqVUXESLgcX1e0oNbYAuiP?usp=share_link"><img src={cm15} alt="Image" /> </a>
                                <h5 className="text-info">Parrillas de contenido</h5>
                            </div>
                            <div className="item">
                                <a href="https://drive.google.com/drive/folders/1U3Vkh3RzZJXqVUXESLgcX1e0oNbYAuiP?usp=share_link"><img src={cm16} alt="Image" /> </a>
                                <h5 className="text-info">Parrillas de contenido</h5>
                            </div>
                            <div className="item">
                                <a href="https://drive.google.com/drive/folders/1U3Vkh3RzZJXqVUXESLgcX1e0oNbYAuiP?usp=share_link"><img src={cm17} alt="Image" /> </a>
                                <h5 className="text-info">Parrillas de contenido</h5>
                            </div>
                            <div className="item">
                                <a href="https://drive.google.com/drive/folders/1U3Vkh3RzZJXqVUXESLgcX1e0oNbYAuiP?usp=share_link"><img src={cm18} alt="Image" /> </a>
                                <h5 className="text-info">Parrillas de contenido</h5>
                            </div>
                            <div className="item">
                                <a href="https://drive.google.com/drive/folders/1U3Vkh3RzZJXqVUXESLgcX1e0oNbYAuiP?usp=share_link"><img src={cm19} alt="Image" /> </a>
                                <h5 className="text-info">Parrillas de contenido</h5>
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
