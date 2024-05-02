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
import prewedding from "../../assets/images/prewedding.jpg";
import wedding from "../../assets/images/wedding.jpg";
import exhibition from "../../assets/images/exhibition.jpg";
import birth from "../../assets/images/birthday.jpg";
import Corporate from "../../assets/images/i.webp";
import product from "../../assets/images/product.jpg";
import babyshower from "../../assets/images/baby shower.jpg";
import engagement from "../../assets/images/engagement.jpg";
import cradle from "../../assets/images/cradle.jpg";
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


                            <div class="recent-blog-container">
                                <div class="recent-blog-flex-main">
                                    <div class="Photograph-tow-card-div-flex-main">
                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={prewedding} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p> Prewedding</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={engagement} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p> Engagement Ceremony</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={wedding} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={birth} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Birthday Celebration</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={cradle} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Cradle Ceremony</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={babyshower} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Baby Shower</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={Corporate} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p> Corporate Functions</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={exhibition} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Exhibition</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="Photograph-tow-card-div-card-one">
                                            <div class="Photograph-tow-card-div-card-personl-image">
                                                <div class="Photograph-tow-card-div-card-personl-image-inner">
                                                    <img src={product} alt='error' />
                                                </div>
                                            </div>
                                            <div class="camera-div-pera">
                                                <div class="camera-div-pera-main">
                                                    <p>Product Photography</p>
                                                </div>
                                            </div>
                                        </div>
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
