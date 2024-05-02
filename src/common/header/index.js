import React, { useState } from 'react'
import './header.scss';
import logo from "../../assets/icons/am full logo.png";
import down from "../../assets/icons/down.png";
import call from "../../assets/icons/phone-call.png";
import mail from "../../assets/icons/email.png";
import location from "../../assets/icons/maps-and-flags.png";
import facebook from "../../assets/icons/facebook.png";
import twiter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/video.png";
import insta from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin-logo.png";
// import search from "../../assets/icons/search.png";
import menu from "../../assets/icons/menu.png";
import { Link } from 'react-router-dom';

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <>
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <Link to={'/'}>HOME</Link>
                <Link to={'/about'}>ABOUT US</Link>

                <div className='mainpages'>
                    <div className='pagesp'>
                        <div className='menufor'>
                            <div className='pagesmain'>
                                <Link to={'/team'}>TEAM</Link>
                            </div>
                            <div className='pagesmain'>
                                <Link to={'/services'}>SERVICES</Link>
                            </div>
                            <div className='pagesmain'>
                                <Link to={'/testimonial'}>TESTIMONIAL</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='maingallery'>
                    <div className='pagess'>
                        <div className='formenu'>
                            <div className='gallerygridman'>
                                <Link to={'/gallerygrid'}>GALLERY GRID</Link>
                            </div>
                            <div className='gallerygridman'>
                                <Link to={'/masonry'}>GALLERY MASONRY</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={'/contact'} >CONTACT</Link>
            </div>

            <div className='background-color'>
                <div className='conatiner'>
                    <div className='main-div'>
                        <div className='contact'>
                            <div className='call'>
                                <img src={call} alt="error" />
                                <a href='tel:+9909796518' target='_blank'>+9909796518</a>
                            </div>
                            <div className='call'>
                                <img src={mail} alt="error" />
                                <a href='mailto:amphotostudio15@gmail' target='_blank'>amphotostudio15@gmail.com</a>
                            </div>
                            <div className='call'>
                                <img src={location} alt="error" />
                                <a href='https://maps.app.goo.gl/uUEewqLCVuP6S1Sv5' target='_blank'>Mota Varachha, Surat, Gujarat </a>
                            </div>
                        </div>
                        <div className='icons'>
                            <div className='logos'>
                                <img src={facebook} alt="error" />
                            </div>

                            <div className='logos'>
                                <img src={youtube} alt="error" />
                            </div>
                            <div className='logos'>
                                <a href="https://www.instagram.com/amphotostudio15" target='_blank'>
                                    <img src={insta} alt="error" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='photo-logo'>
                <div className='conatiner'>
                    <div className='flexdiv'>
                        <div className='img'>
                            <Link to={'/'}>  <img src={logo} alt="error" /></Link>
                        </div>
                        <div className='ancer'>
                            <Link to={'/'}>HOME</Link>
                            <Link to={'/about'}>ABOUT US</Link>

                            <div className='mainpages'>
                                <div className='pagesp'>
                                    <Link to={''}>PAGES
                                        <img src={down} alt="error" />
                                        <div className='menufor'>
                                            <div className='pagesmain'>
                                                <Link to={'/team'}>TEAM</Link>
                                            </div>
                                            <div className='pagesmain'>
                                                <Link to={'/services'}>SERVICES</Link>
                                            </div>
                                            <div className='pagesmain'>
                                                <Link to={'/testimonial'}>TESTIMONIAL</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className='maingallery'>
                                <div className='pagess'>
                                    <Link to={''}>GALLERY
                                        <img src={down} alt="error" />
                                        <div className='formenu'>
                                            <div className='gallerygridman'>
                                                <Link to={'/gallerygrid'}>GALLERY GRID</Link>
                                            </div>
                                            <div className='gallerygridman'>
                                                <Link to={'/mansory'}>GALLERY MASONRY</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <Link to={'/contact'} >CONTACT</Link>
                        </div>

                        <div onClick={toggleNav} class="menu" id="menu-icon" >
                            <img src={menu} alt="error" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
