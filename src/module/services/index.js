import React from 'react'
import './services.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import photoss from "../../assets/icons/imagesss.png";
import print from "../../assets/icons/printss.png";
import photo7 from "../../assets/images/photozone-img07.jpg";
import photo9 from "../../assets/images/photozone-img09.jpg";
import photo8 from "../../assets/images/photozone-img08.jpg";
import photo5 from "../../assets/images/photozone-img05.jpg";
import cameras from "../../assets/icons/camerasss.png";
import prints from "../../assets/icons/printss.png";
import rotate from "../../assets/icons/rotate.png";
import videos from "../../assets/icons/video-camera-s.png";
import prewedding from "../../assets/images/01.jpg";
import wedding from "../../assets/images/wedding.jpg";
import exhibition from "../../assets/images/exhibition.jpg";
import birth from "../../assets/images/birthday.jpg";
import Corporate from "../../assets/images/i.webp";
import product from "../../assets/images/product.jpg";
import babyshower from "../../assets/images/A_M_4416.jpg";
import engagement from "../../assets/images/04.jpg";
import cradle from "../../assets/images/cradle.jpg";

export default function Services() {
    return (
        <>
            <div className='bg-relative'>
                <div className='background-img-one'>
                    <div className='backgound-overlay'>
                        <div className='feature'>
                            <h1>Services</h1>
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
                                <p>"Step into Our Studio and Enter a World of Creativity and Inspiration.
                                    From the moment you walk through our doors, you're greeted with warmth and professionalism.
                                    Our team is dedicated to bringing your vision to life, whether it's a personal portrait or a commercial project.
                                </p>
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

            <div class="card-div-back-color">
                <div class="card-div-container">
                    <div class="card-main-shoot">
                        <div class="card-main-shoot-flex-main">
                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={cameras} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Studio Shooting </h5>

                                </div>
                            </div>

                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={videos} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Studio Video </h5>

                                </div>
                            </div>

                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={print} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Printing Studio </h5>
                                </div>
                            </div>

                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={photoss} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Retouching Photos </h5>
                                </div>
                            </div>

                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={rotate} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Creating Posters </h5>
                                </div>
                            </div>

                            <div class="shoot-card-one-inner-padding">
                                <div class="shoot-card-inner-details">
                                    <div class="top-image-main">
                                        <div class="top-image-circle-back">
                                            <img src={prints} alt='error' />
                                        </div>
                                    </div>
                                    <h5> Printing Gallery </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='blue-bg-serv'>
                <div className='top-padd'>
                    <div className='container'>
                        <div className='img'>
                            <img src={bosa2} alt='error' />
                        </div>
                        <h6>OUR FEATURES</h6>
                        <div className='ourmain'>
                            <h2>Our Main Specialities</h2>
                        </div>

                        <div className='fourimg'>
                            <div className='fourimg-grid'>
                                <div className='forwidth'>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>01.</span>
                                            <h5> Interactive Imagery</h5>
                                        </div>
                                        <p>Discover Dynamic Storytelling and Engaging Visual Experiences. Explore Our Expertise in Interactive Imaging Solutions.</p>
                                        <div className='girlphoto'>
                                            <img src={photo7} alt='error' />
                                        </div>
                                    </div>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>03.</span>
                                            <h5>Cutting Edge Technology</h5>
                                        </div>
                                        <p>Revolutionizing imagery with cutting-edge tech solutions. Where innovation meets your visual aspirations.</p>
                                        <div className='girlphoto'>
                                            <img src={photo9} alt='error' />
                                        </div>
                                    </div>
                                </div>
                                <div className='forwidth1'>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>02.</span>
                                            <h5>Effective Workflow</h5>
                                        </div>
                                        <p>Streamlining your visual narrative from capture to delivery. Efficient workflow solutions tailored for your photography needs.</p>
                                        <div className='girlphoto'>
                                            <img src={photo8} alt='error' />
                                        </div>
                                    </div>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>04.</span>
                                            <h5>Best Photo-Session</h5>
                                        </div>
                                        <p>Unlock unforgettable memories with our expertly crafted photo session. Capturing the essence of every moment, one frame at a time.</p>
                                        <div className='girlphoto'>
                                            <img src={photo5} alt='error' />
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
