import React, { useEffect, useRef, useState } from 'react'
import './home.scss';
import bosa from "../../assets/images/bosa-photography-img3.png";
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import colorpic from "../../assets/images/photozone-img04.jpg";
import camera from "../../assets/icons/camera.png";
import video from "../../assets/icons/video-camera (1).png";
import editing from "../../assets/icons/add-image.png";
import photo7 from "../../assets/images/photozone-img07.jpg";
import photo9 from "../../assets/images/photozone-img09.jpg";
import photo8 from "../../assets/images/photozone-img08.jpg";
import photo5 from "../../assets/images/photozone-img05.jpg";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import photo14 from "../../assets/images/A_M_2834.jpg";
import photo10 from "../../assets/images/A_M_P__04.jpg";
import photo11 from "../../assets/images/A_M_2878.jpg";
import photo12 from "../../assets/images/garba.jpg";
import photo15 from "../../assets/images/01+.jpg";
import photo13 from "../../assets/images/wedding-gallery.jpg";
import doublequotes from "../../assets/icons/double-quotes.png";
import photo24 from "../../assets/images/photozone-img024.jpg";
import address from "../../assets/icons/address.png";
import call1 from "../../assets/icons/phone-call 2.png";
import email2 from "../../assets/icons/email 2.png";
import alaram from "../../assets/icons/alarm-clock.png";
import facebook1 from "../../assets/icons/facebook1.png";
import instagramm from "../../assets/icons/instagram-2.png";
import youtube1 from "../../assets/icons/youtubeb.png";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import close from "../../assets/icons/close.png";

const imageArray = [photo15, photo10, photo11, photo12, photo13, photo14]
export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState()

    const modalRef = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: true
    };
    return (
        <>

            <div className='bg-relative'>
                <div className='background-img'>
                    <div className='backgound-overlay'>
                        <div className='feature'>
                            <p>BEST GALLERY</p>
                            <h1>PHOTOGRAPHY <br /> STUDIO</h1>
                            <div className='button'>
                                <Link to={'/about'}>
                                    <button type='button'>Learn more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='background-rel'>
                <div className='background-darkcolor'>
                    <div className='bg-img'>
                        <div className='asdfg'>
                            <img src={bosa} alt='error' />
                        </div>
                        <div className='container'>
                            <div className='asgh'>
                                <div className='yearsofexp'>
                                    <h1>12</h1>
                                    <h3>YEARS</h3>
                                    <p>OF EXPERIENCE</p>
                                </div>
                                <div className='intro'>
                                    <div className='bosa2'>
                                        <img src={bosa2} alt='error' />
                                        <h6>INTRODUCTION</h6>
                                        <h2>Secret Of Success <br /> Of Our <br /> Photography <br />Projects</h2>
                                    </div>
                                </div>
                                <div className='peragraph'>
                                    <p> Having a clear vision and concept for each project is crucial. Define what you want to convey through your photographs and ensure consistency in style and theme.Thorough planning and preparation are essential. This includes scouting locations, arranging props or models, and considering lighting conditions.</p>
                                    <div className='button2'>
                                        <Link to={'./about'}>
                                            <button type='button'>LEARN MORE</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='colorgirl'>
                                <div>
                                    <img src={colorpic} alt='error' />
                                </div>
                                <div className='sidetable'>
                                    <div className='lines'>
                                        <p>01. Wedding Ceremony</p>
                                    </div>
                                    <div className='lines'>
                                        <p>02. Engagement Ceremony</p>
                                    </div>
                                    <div className='lines'>
                                        <p>03. Prewedding</p>
                                    </div>
                                    <div className='lines'>
                                        <p>03. Prewedding</p>
                                    </div>
                                    <div className='lines'>
                                        <p>04.  Birthday Celebration</p>
                                    </div>
                                    <div className='lines'>
                                        <p>05. Cradle Ceremony</p>
                                    </div>
                                    <div className='lines'>
                                        <p>06. Baby Shower</p>
                                    </div>
                                    <div className='lines'>
                                        <p>07. Corporate Functions</p>
                                    </div>
                                    <div className='lines'>
                                        <p>08. Exhibition</p>
                                    </div>
                                    <div className='lines'>
                                        <p>09.Product Photography</p>
                                    </div>
                                    <div className='lines'>
                                        <p>10. All Types of Events</p>
                                    </div>
                                </div>
                            </div>
                            <div className='entensive'>
                                <div className='alldiv'>
                                    <div className='backcolor'>
                                        <img src={camera} alt='error' />
                                    </div>
                                    <div className='text'>
                                        <h5>Extensive Equipment</h5>
                                        <p>Capture the world's tools and treasures, one pixel at a time.</p>
                                    </div>
                                </div>
                                <div className='alldiv'>
                                    <div className='backcolor'>
                                        <img src={video} alt='error' />
                                    </div>
                                    <div className='text'>
                                        <h5>Studio Sessions</h5>
                                        <p>Unveiling Moments, Perfectly Captured.</p>
                                    </div>
                                </div>
                                <div className='alldiv'>
                                    <div className='backcolor'>
                                        <img src={editing} alt='error' />
                                    </div>
                                    <div className='text'>
                                        <h5>Professional Editing</h5>
                                        <p>Elevate Your Imagery with Professional Editing Excellence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='blue-bg'>
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

            <div className='cameragirl-bgimg'>
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

            <div className='gallery'>
                <div className='toppaddi'>
                    <div className='container'>
                        <div className='logo-img'>
                            <div className='checkout'>
                                <img src={bosa2} alt='arror' />
                                <p>PHOTO GALLERY </p>
                                <h2>Checkout Our Gallery</h2>
                            </div>

                            <div className='allimgs'>
                                {imageArray?.map((item) => {
                                    return (
                                        <div className='imgsmarr '>
                                            <div data-aos="zoom-in" className='drigirl' onClick={() => { setIsOpen(!isOpen); setImage(item) }}>
                                                <img src={item} alt='error' />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='colorfullgirl'>
                <div className='container'>
                    <div className='clinetreview'>
                        <Slider {...settings}>
                            <div className='double1'>
                                <img src={doublequotes} alt='error' />
                                <div className='sociosqu'>
                                    <p>"Sociosqu hendrerit litora impedit, posuere cursus ipsam ac facilisi mollis convallis nam, condimentum ea! Accumsan. Magnam maiores urna? Arcu veritatis? Augue, eum quae praesent, faucibus. Id repudiandae id consequat suscipit dictum aliqua optio!"</p>
                                </div>
                                <div className='imgdiv'>
                                    <div className='roundimg'>
                                        <img src={photo24} alt='error' />
                                    </div>
                                    <div className='name'>
                                        <p>Alison White</p>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>

                            <div className='double1'>
                                <img src={doublequotes} alt='error' />
                                <div className='sociosqu'>
                                    <p>"Sociosqu hendrerit litora impedit, posuere cursus ipsam ac facilisi mollis convallis nam, condimentum ea! Accumsan. Magnam maiores urna? Arcu veritatis? Augue, eum quae praesent, faucibus. Id repudiandae id consequat suscipit dictum aliqua optio!"</p>
                                </div>
                                <div className='imgdiv'>
                                    <div className='roundimg'>
                                        <img src={photo24} alt='error' />
                                    </div>
                                    <div className='name'>
                                        <p>Alison White</p>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>

                            <div className='double1'>
                                <img src={doublequotes} alt='error' />
                                <div className='sociosqu'>
                                    <p>"Sociosqu hendrerit litora impedit, posuere cursus ipsam ac facilisi mollis convallis nam, condimentum ea! Accumsan. Magnam maiores urna? Arcu veritatis? Augue, eum quae praesent, faucibus. Id repudiandae id consequat suscipit dictum aliqua optio!"</p>
                                </div>
                                <div className='imgdiv'>
                                    <div className='roundimg'>
                                        <img src={photo24} alt='error' />
                                    </div>
                                    <div className='name'>
                                        <p>Alison White</p>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

            <div class="professinal-sec-main">
                <div class="professinal-sec-container">
                    <div class="professinal-sec-width">
                        <div class="professinal-sec-flex-main">
                            <div class="team-members-logo">
                                <img src={bosa2} alt='error' />
                            </div>
                            <div class="team-member-pera">
                                <h6>TEAM MEMBERS</h6>
                            </div>
                            <div class="professinal-pera">
                                <h2>Professional Photographers</h2>
                            </div>
                            <div class="card-main">
                                <div class="card-container">
                                    <div class="card1">
                                        <div class="card-person-main">
                                            <div class="card-person-blank"></div>
                                            <div class="card-social-icon">
                                                <div class="card-social-icon-box">
                                                    <div class="card-social-icon-box-grid">
                                                        <div class="social-icon">
                                                            <img src={facebook1} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={instagramm} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={youtube1} alt='error' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="blank"></div>
                                            <div class="photo-work-pera">
                                                <h6>Photographer</h6>
                                            </div>
                                            <div class="name-box-main">
                                                <h5>Mary James</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card2">
                                        <div class="card-person-main">
                                            <div class="card-person-blank"></div>
                                            <div class="card-social-icon">
                                                <div class="card-social-icon-box">
                                                    <div class="card-social-icon-box-grid">
                                                        <div class="social-icon">
                                                            <img src={facebook1} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={instagramm} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={youtube1} alt='error' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="blank"></div>
                                            <div class="photo-work-pera">
                                                <h6>Photographer</h6>
                                            </div>
                                            <div class="name-box-main">
                                                <h5>William Smith</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card3">
                                        <div class="card-person-main">
                                            <div class="card-person-blank"></div>
                                            <div class="card-social-icon">
                                                <div class="card-social-icon-box">
                                                    <div class="card-social-icon-box-grid">
                                                        <div class="social-icon">
                                                            <img src={facebook1} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={instagramm} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={youtube1} alt='error' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="blank"></div>
                                            <div class="photo-work-pera">
                                                <h6>Videographer</h6>
                                            </div>
                                            <div class="name-box-main">
                                                <h5>Lara Houstan</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card4">
                                        <div class="card-person-main">
                                            <div class="card-person-blank"></div>
                                            <div class="card-social-icon">
                                                <div class="card-social-icon-box">
                                                    <div class="card-social-icon-box-grid">
                                                        <div class="social-icon">
                                                            <img src={facebook1} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={instagramm} alt='error' />
                                                        </div>
                                                        <div class="social-icon">
                                                            <img src={youtube1} alt='error' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="blank"></div>
                                            <div class="photo-work-pera">
                                                <h6>Videographer</h6>
                                            </div>
                                            <div class="name-box-main">
                                                <h5>Garry Henderson</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contanctus'>
                <div className='blurback'>
                    <div className='paddingdiv'>
                        <div className='container'>
                            <div className='maincontact'>
                                <div className='contus'>
                                    <div>
                                        <img src={bosa2} alt='error' />
                                        <p>CONTACT US</p>
                                    </div>
                                    <div className='anykind'>
                                        <h2>Contact For Any Kind Of Information</h2>
                                    </div>

                                    <form action="mailto:amphotostudio15@gmail" >
                                        <div className='yourname'>
                                            <input type='name' placeholder='Your Name' name="name" required />
                                        </div>
                                        <div className='yourname'>
                                            <input type='email' placeholder='Your Email' name="email" required />
                                        </div>

                                        <div className='text'>
                                            <textarea placeholder='Your Massage' name="message" required></textarea>
                                        </div>
                                        <div className='sendnow'>
                                            <button type='submit'>SEND MASSAGE</button>
                                        </div>
                                    </form>

                                </div>

                                <div className='ouradd'>
                                    <div className='allmain'>
                                        <div className='borderside1'>
                                            <a href="mailto:amphotostudio15@gmail" target='_blank'>
                                                <div className='firstlogo'>
                                                    <div className='logoround'>
                                                        <img src={email2} alt='error' />
                                                    </div>
                                                    <div className='ouadd'>
                                                        <h2>Email address :</h2>
                                                    </div>
                                                    <div className='avenue'>
                                                        <span>amphotostudio15@gmail.com</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='borderside2'>
                                            <a href="callto:9909796518" target='_blank'>
                                                <div className='firstlogo'>
                                                    <div className='logoround'>
                                                        <img src={call1} alt='error' />
                                                    </div>
                                                    <div className='ouadd'>
                                                        <h2>Phone no :</h2>
                                                    </div>
                                                    <div className='avenue'>
                                                        <span>Phone :  9909796518</span>
                                                        {/* <p>Mobile : 619 270 8578</p> */}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div className='allmain1'>
                                        <div className='borderside3'>


                                            <a href="https://maps.app.goo.gl/Fp9DacwfA14mp7mG8" target='_blank'>
                                                <div className='firstlogo'>
                                                    <div className='logoround'>
                                                        <img src={address} alt='error' />
                                                    </div>
                                                    <div className='ouadd'>
                                                        <h2>Our address :</h2>
                                                    </div>
                                                    <div className='avenue'>
                                                        <span>324, Angel Business Center-1,  Mota Varachha, Surat, Gujarat</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div className='borderside4'>
                                            <a href="https://maps.app.goo.gl/Fp9DacwfA14mp7mG8" target='_blank'>
                                                <div className='firstlogo'>
                                                    <div className='logoround'>
                                                        <img src={alaram} alt='error' />
                                                    </div>
                                                    <div className='ouadd'>
                                                        <h2>Working hour :</h2>
                                                    </div>
                                                    <div className='avenue'>
                                                        <span>Mon-thu: 8:00-8:00</span>
                                                        <p>Fri-Sun: 10:00-08:00</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && <div className='modal-wrapper-home'>
                <div className='modal-md' ref={modalRef}>
                    <div className='model-img'>
                        <div className="images">
                            <img src={image} alt="error" />
                        </div>
                        <div className='model-button'>
                            <button onClick={() => setIsOpen(false)}>
                                <img src={close} alt="error" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
