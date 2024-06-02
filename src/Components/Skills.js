import meter1 from "../Assets/img/retro/concorde-and-eclipse.jpg";
import meter2 from "../Assets/img/retro/helixNebula.jpg";
import meter3 from "../Assets/img/retro/robo.jpg";
import meter4 from "../Assets/img/retro/connect-2.jpg";
import meter5 from "../Assets/img/retro/hubble.jpg";
// import colorSharp from "../Assets/img/DaftPunkBanner.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () =>{
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="tinos-bold">BLOGS</h2>
                            <p className="tinos-regular">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <a href="#" className='no-blue' target="_blank">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5 className="tinos-regular">Blog 1</h5>
                                </div>
                            </a>
                            <a href="#" className='no-blue' target="_blank">
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5 className="tinos-regular">Blog 2</h5>
                                </div>
                            </a>
                            <a href="#" className='no-blue' target="_blank">
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5 className="tinos-regular">Blog 3</h5>
                                </div>
                            </a>
                            <a href="#" className='no-blue' target="_blank">
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5 className="tinos-regular">Blog 4</h5>
                                </div>
                            </a>
                            <a href="#" className='no-blue' target="_blank">
                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5 className="tinos-regular">Blog 5</h5>
                                </div>
                            </a>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
      )
}