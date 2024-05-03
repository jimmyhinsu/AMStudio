import React from 'react'
import './mansory.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
import photo14 from "../../assets/images/A_M_2834.jpg";
import photo10 from "../../assets/images/A_M_P__04.jpg";
import photo11 from "../../assets/images/A_M_2878.jpg";
import photo12 from "../../assets/images/garba.jpg";
import photo15 from "../../assets/images/01+.jpg";
import photo13 from "../../assets/images/wedding-gallery.jpg"
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import Slider from "react-slick";

export default function Mansory() {

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

            <div className='gallery-mans'>
                <div className='toppaddi'>
                    <div className='container'>
                        <div className='logo-img'>
                            <div className='checkout'>
                                <img src={bosa2} alt='arror' />
                                <p>PHOTO GALLERY </p>
                                <h2>Checkout Our Gallery</h2>
                            </div>

                            <div className='allimgs'>
                                <div data-aos="fade-down-right" className='imgsmarr'>
                                    <img src={photo15} alt='arror' />
                                </div>
                                <div data-aos="fade-down-right" className='imgsmarr'>
                                    <img src={photo10} alt='arror' />
                                </div>
                                <div data-aos="fade-down-right" className='imgsmarr'>
                                    <img src={photo11} alt='arror' />
                                </div>
                                <div data-aos="fade-down-left" className='imgsmarr'>
                                    <img src={photo13} alt='arror' />
                                </div>
                                <div data-aos="fade-down-left" className='imgsmarr'>
                                    <img src={photo14} alt='arror' />
                                </div>
                                <div data-aos="fade-down-left" className='imgsmarr'>
                                    <img src={photo12} alt='arror' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='colorfullgirl-one'>
                <div className='container'>
                    <div className='clinetreview'>
                        <div className='double'>
                            <img src={bosa2} alt='error' />
                            <div className='clltoact'>
                                <h6>CALL TO ACTION</h6>
                            </div>
                            <div className='weareprof'>
                                <h2>We Are Professional In Our Works. Hire Us!!</h2>
                            </div>
                            <p>Choose Us for Your Photography Needs.
                                With a dedication to excellence and a passion for capturing moments, we deliver unparalleled quality in every shot.
                                Hire us today and let's create stunning visuals that tell your unique story.
                            </p>
                            <div className='buttonhire'>
                                <a href='mailto: amphotostudio15@gmail.com'>
                                    <button>HIRE US NOW !</button>
                                </a>
                            </div>
                        </div>
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
                                                <p>Awards</p>
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
