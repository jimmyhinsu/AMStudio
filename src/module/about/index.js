import React from 'react'
import './about.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import studio from "../../assets/icons/video-camera-s.png";
import photoss from "../../assets/icons/imagesss.png";
import camera2 from "../../assets/icons/camerasss.png";
import print from "../../assets/icons/printss.png";

export default function About() {
    return (
        <>
            <div className='bg-relative'>
                <div className='background-img-one'>
                    <div className='backgound-overlay'>
                        <div className='feature'>
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mainbgimg'>
                <div className='wtostudio'>
                    <div className='container'>
                        <div className='allmainzdiv'>
                            <div className='introdu'>
                                <div className='intbosa'>
                                    <img src={bosa2} alt='error' />
                                    <h6>INTRODUCTION</h6>
                                </div>
                                <div className='weltourstu'>
                                    <h2>Welcome To Our Studio</h2>
                                </div>
                                <p>Magnam consequatur ipsa faucibus porro accusamus nostrud, a odit vitae! Duis cumque, vivamus turpis, et, nunc necessitatibus hendrerit! Temporibus, eos laborum porttitor perspiciatis consequat, accusamus eos incididunt odit porta class, ridiculus fusce! Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className='videomaindiv'>
                                <div className='twogirls'>
                                    <div className='bgblacks'></div>
                                </div>
                                <div className='ourskills'>
                                    <div className='skills'>
                                        <h4>Our Skills</h4>
                                    </div>
                                    <div className='tortor'>
                                        <p>Tortor ante autem consectetur rerum numquam eligendi nullam doloribus cum temporibus litora est?
                                            Laoreet, officia delectus debitis faucibus cupidatat ante? Deleniti aliquid quisquam. Lacus modi officia delectus officia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ourmission'>
                <div className='container'>
                    <div className='wetrycustomers'>
                        <div className='firtmission'>
                            <div className='missionlogo'>
                                <img src={bosa2} alt='error' />
                                <h6>OUR MISSION</h6>
                            </div>
                            <h2>We Try For Our Customers!!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper matt.</p>
                            <div className='buttonab'>
                                <button>HIRE US NOW</button>
                            </div>
                        </div>
                        <div className='blankdiv'>
                            <div className='videocamera'>
                                <div className='logobacki'>
                                    <img src={studio} alt='error' />
                                </div>
                                <div className='videoss'>
                                    <h5>Studio Videos</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='videocamera-one'>
                                <div className='logobacki'>
                                    <img src={photoss} alt='error' />
                                </div>
                                <div className='videoss'>
                                    <h5>Retouching Photo</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className='blankdiv'>
                            <div className='videocamera'>
                                <div className='logobacki'>
                                    <img src={camera2} alt='error' />
                                </div>
                                <div className='videoss'>
                                    <h5>Studio Sessions</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className='videocamera-one'>
                                <div className='logobacki'>
                                    <img src={print} alt='error' />
                                </div>
                                <div className='videoss'>
                                    <h5>Print Studio</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cameragirl-about'>
                <div className='bgcamera'>
                    <div className='bg-opa'>
                        <div className='container'>
                            <div className='callto'>
                                <img src={bosa2} alt='error'/>
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
