import React from 'react'
import './contact.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import facebook1 from "../../assets/icons/facebook1.png";
import twiter1 from "../../assets/icons/twitter1.png";
import youtube1 from "../../assets/icons/youtubeb.png";
import instagramm from "../../assets/icons/social-media.png";
import pintrestt from "../../assets/icons/pinterest-logo.png";
import maill from "../../assets/icons/maillll.png";
import calls from "../../assets/icons/telephoneeee.png";
import signpost from "../../assets/icons/sign-posttt.png";

export default function Contact() {
    return (
        <>

            <div className='bg-relative'>
                <div className='background-img-one'>
                    <div className='backgound-overlay'>
                        <div className='feature'>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="get-in-touch-grid-box-main-padding">
                <div class="get-in-touch-grid-box-container">
                    <div class="get-in-touch-grid-box-width">
                        <div class="get-in-touch-grid-box-flx-main-width">

                            <div class="elementor-widget-wrap">
                                <div class="logo">
                                    <img src={bosa2} alt='error' />
                                </div>
                                <div class="contact-pera">
                                    <h6>CONTACT US</h6>
                                </div>
                                <div class="get-in-touch-pera">
                                    <h2>Get In Touch !</h2>
                                </div>
                                <div class="penati-pera">
                                    <div class="penati-peraa-mar">
                                        <p>Penatibus numquam? Non? Aliqua tempore est deserunt sequi itaque, nascetur,
                                            consequuntur conubianigp, explicabo? Primis convallis ullam. Egestas deserunt
                                            eius
                                            molestias app incididunt? Nulla, nonummy non, just.</p>
                                    </div>
                                </div>
                                <div class="social-logo-flex-main">
                                    <div class="social-box">
                                        <img src={facebook1} alt='error' />
                                    </div>
                                    <div class="social-box">
                                        <img src={twiter1} alt='error' />
                                    </div>
                                    <div class="social-box">
                                        <img src={youtube1} alt='error' />
                                    </div>
                                    <div class="social-box">
                                        <a href="https://www.instagram.com/am_photo_studio_/" target='_blank'>
                                            <img src={instagramm} alt='error' />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="get-in-touch-grid-box-two-inner">
                                <div class="icon-box-one-sider">
                                    <div class="icon">
                                        <span>
                                            <img src={signpost} alt='error' />
                                        </span>
                                    </div>
                                    <div class="icon-text">
                                        <h5>
                                            <span> Address location </span>
                                        </h5>
                                        <p> 324, Angel Business Center-1,
                                            ABC Circle, Mota Varachha,
                                            Surat, Gujarat. </p>
                                    </div>
                                </div>

                                <div class="icon-box-one-sider">
                                    <div class="icon">
                                        <span>
                                            <img src={maill} alt='error' />
                                        </span>
                                    </div>
                                    <div class="icon-text">
                                        <h5>
                                            <span> Email address </span>
                                        </h5>
                                        <p>  amphotostudio15@gmail.com </p>
                                    </div>
                                </div>
                                <div class="icon-box-one-sider">
                                    <div class="icon">
                                        <span>
                                            <img src={calls} alt='error' />
                                        </span>
                                    </div>
                                    <div class="icon-text">
                                        <h5>
                                            <span> Phone number </span>
                                        </h5>
                                        <p> Mobile: +91 99097 96518 </p>
                                    </div>
                                </div>


                            </div>

                            <div class="login-form-padding-main">
                                <form>
                                    <div class="input-box">
                                        <div class="name-input">
                                            <input type="text" placeholder="Your Name*" />
                                        </div>

                                        <div class="name-input">
                                            <input type="email" placeholder="Your Email*" />
                                        </div>

                                        <div class="text-area-box">
                                            <textarea cols="30" rows="10" placeholder="Your Message*"></textarea>
                                        </div>

                                        <div class="send-button">
                                            <a href="">
                                                <button type="button">SEND MESSAGE</button>
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div class="iframe-div-main">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59513.788150851775!2d72.8287757!3d21.2075765!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f420de51521%3A0xc36fbf719c3f8c29!2sAM%20PHOTO%20STUDIO!5e0!3m2!1sen!2sin!4v1714555875534!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
