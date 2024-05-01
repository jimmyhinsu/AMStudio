import React from 'react'
import './mansory.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
// import photo10 from "../../aseets/images/photozone-img010.jpg";
// import photo11 from "../../aseets/images/photozone-img011.jpg";
// import photo14 from "../../aseets/images/photozone-img014.jpg";
// import photo15 from "../../aseets/images/photozone-img015.jpg";
// import photo13 from "../../aseets/images/photozone-img013.jpg";
// import photo12 from "../../aseets/images/photozone-img012.jpg";
// import photo24 from "../../aseets/images/photozone-img024.jpg";
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import Slider from "react-slick";

export default function Mansory() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='bg-relative'>
                <div className='background-img-one'>
                    <div className='backgound-overlay'>
                        <div className='feature'>
                            <h1>Gallery Masonry</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='gallery-mano'>
                <div className='toppaddi'>
                    <div className='container'>
                        <div className='logo-img'>
                            <div className='checkout'>
                                <img src={bosa2} />
                                <p>PHOTO GALLERY </p>
                                <h2>Checkout Our Gallery</h2>
                            </div>

                            <div>
                                <div className='allimgs'>
                                    <div className='firtsline'>
                                        <div data-aos="fade-down-right" className='imgsmarr'>
                                            <img src={photo11} />
                                        </div>
                                        <div data-aos="fade-down-right" className='imgsmarr'>
                                            <img src={photo10} />
                                        </div>
                                        <div data-aos="fade-down-right" className='imgsmarr'>
                                            <img src={photo14} />
                                        </div>
                                    </div>
                                    <div className='secline'>
                                        <div data-aos="fade-down-left" className='imgsmarr'>
                                            <img src={photo15} />
                                        </div>
                                        <div data-aos="fade-down-left" className='imgsmarr'>
                                            <img src={photo13} />
                                        </div>
                                        <div data-aos="fade-down-left" className='imgsmarr'>
                                            <img src={photo12} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='colorfullgirl-one'>
                <div className='container'>
                    <div className='clinetreview'>
                        <Slider {...settings}>
                            <div className='double'>
                                <img src={bosa2} alt='error' />
                                <div className='clltoact'>
                                    <h6>CALL TO ACTION</h6>
                                </div>
                                <div className='weareprof'>
                                    <h2>We Are Professional In Our Works. Hire Us!!</h2>
                                </div>
                                <p>Tempora placeat quibusdam aute nibh habitant vel vehicula,
                                    tempus vitae praesent donec, phasellus amet animi, tempore. Risus
                                    nascetur exercitationem, possimus! Cum porta parturient habitant
                                    officiis eleifend rhoncus.
                                </p>
                                <div className='buttonhire'>
                                    <button>HIRE US NOW !</button>
                                </div>
                            </div>

                            <div className='double'>
                                <img src={bosa2} alt='error' />
                                <div className='clltoact'>
                                    <h6>CALL TO ACTION</h6>
                                </div>
                                <div className='weareprof'>
                                    <h2>We Are Professional In Our Works. Hire Us!!</h2>
                                </div>
                                <p>Tempora placeat quibusdam aute nibh habitant vel vehicula,
                                    tempus vitae praesent donec, phasellus amet animi, tempore. Risus
                                    nascetur exercitationem, possimus! Cum porta parturient habitant
                                    officiis eleifend rhoncus.
                                </p>
                                <div className='buttonhire'>
                                    <button>HIRE US NOW !</button>
                                </div>
                            </div>

                            <div className='double'>
                                <img src={bosa2} alt='error' />
                                <div className='clltoact'>
                                    <h6>CALL TO ACTION</h6>
                                </div>
                                <div className='weareprof'>
                                    <h2>We Are Professional In Our Works. Hire Us!!</h2>
                                </div>
                                <p>Tempora placeat quibusdam aute nibh habitant vel vehicula,
                                    tempus vitae praesent donec, phasellus amet animi, tempore. Risus
                                    nascetur exercitationem, possimus! Cum porta parturient habitant
                                    officiis eleifend rhoncus.
                                </p>
                                <div className='buttonhire'>
                                    <button>HIRE US NOW !</button>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='cameragirl-mano'>
                <div className='bgcamera'>
                    <div className='bg-opa'>
                        <div className='container'>
                            <div className='callto'>
                                <img src={bosa2} alt='error' />
                                <div className='action'>
                                    <h6>CALL TO ACTION</h6>
                                </div>
                                <h2>We Are Professional In Our <br />Works. Hire Us!!</h2>

                                <div className='satisfied'>
                                    <div className='four-new'>
                                        <div className='light-color'>
                                            <div className='users'>
                                                <img src={users} alt='error' />
                                            </div>
                                            <div className='sati'>
                                                <span>500+</span>
                                                <p>Satisfied Customers</p>
                                            </div>
                                        </div>
                                        <div className='light-color'>
                                            <div className='users'>
                                                <img src={videocamera} alt='error' />
                                            </div>
                                            <div className='sati'>
                                                <span>160+</span>
                                                <p>Studio Sessions</p>
                                            </div>
                                        </div>
                                        <div className='light-color'>
                                            <div className='users'>
                                                <img src={trophy} alt='error' />
                                            </div>
                                            <div className='sati'>
                                                <span>65+</span>
                                                <p>Satisfied Customers</p>
                                            </div>
                                        </div>
                                        <div className='light-color'>
                                            <div className='users'>
                                                <img src={camera1} alt='error' />
                                            </div>
                                            <div className='sati'>
                                                <span>1,800+</span>
                                                <p>Complete Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
