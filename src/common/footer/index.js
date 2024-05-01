import React from 'react'
import './footer.scss';
import call from "../../assets/icons/phone-call.png";
import mail from "../../assets/icons/email.png";
import location from "../../assets/icons/maps-and-flags.png";
import facebook from "../../assets/icons/facebook.png";
import twiter from "../../assets/icons/twitter.png";
import insta from "../../assets/icons/instagram.png";
import photo04 from "../../assets/images/photozone-img04-300x262.jpg";
import photo07 from "../../assets/images/photozone-img07-300x180.jpg";
import photo015 from "../../assets/images/photozone-img015-300x200.jpg";
import photo014 from "../../assets/images/photozone-img014-300x200.jpg";
import photo09 from "../../assets/images/photozone-img09-300x180.jpg";
import photo05 from "../../assets/images/photozone-img05-300x180.jpg";
import photologo from "../../assets/icons/am full logo.png";
import google from "../../assets/icons/google.png";
// import pintrest from "../../assets/icons/pinterest-logo.png";


export default function Footer() {
    return (
        <>
            <div className='lastcontact'>
                <div className='container'>
                    <div className='threegrid'>
                        <div className='newsletter'>
                            <div className='newss'>
                                <h5>Newsletter</h5>
                                <div className='border1'></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullam.</p>
                            <form>
                                <div className='mail'>
                                    <input type='email' placeholder='Your Email'></input>
                                </div>
                            </form>
                            <div className='subscr'>
                                <button>SEND NOW !</button>
                            </div>
                        </div>

                        <div className='photozone'>
                            <div className='photosim'>
                                <img src={photologo} alt="error" />
                            </div>
                            <div className='loremipsum'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className='eighteve'>
                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={call} alt="error" />
                                    </div>
                                    <a href='callto:9909796518' target='_blank'>9909796518</a>
                                </div>

                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={location} alt="error" />
                                    </div>
                                    <a href='https://maps.app.goo.gl/Fp9DacwfA14mp7mG8' target='_blank'>𝖲𝗁𝗈𝗉 𝖭𝗈.324, 3th Floor, Angel Business Center-1,
                                        ABC Circle, Mota Varachha,
                                        Surat, Gujarat 394101
                                    </a>
                                </div>

                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={mail} alt="error" />
                                    </div>
                                    <a href='mailto:amphotostudio15@gmail.com' target='_blank'> amphotostudio15@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className='gallyimg'>
                            <div className='gallerylt'>
                                <h5>Gallery</h5>
                                <div className='border'></div>
                            </div>
                            <div className='smallimg'>
                                <div className='imgsss'>
                                    <img src={photo04} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo07} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo015} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo014} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo09} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo05} alt="error" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyrightcolor'>
                <div className='container'>
                    <div className='lastlogos'>
                        <div className='linecopy'>
                            <span>Copyright © 2024 AM Studio. All rights reserved.</span>
                        </div>
                        <div className='logoss'>
                            <div className='threelogos'>
                                <div className='logosdeign'>

                                    <img src={facebook} alt="error" />

                                </div>
                            </div>
                            <div className='threelogos'>
                                <div className='logosdeign'>
                                    <img src={twiter} alt="error" />
                                </div>
                            </div>
                            <div className='threelogos'>
                                <div className='logosdeign'>
                                    <a href="https://www.instagram.com/am_photo_studio_/" target='_blank'>
                                        <img src={insta} alt="error" />
                                    </a>
                                </div>

                            </div>
                            <div className='threelogos'>
                                <div className='logosdeign'>
                                    <a href="https://maps.app.goo.gl/Fp9DacwfA14mp7mG8" target='_blank'>
                                        <img src={google} alt="error" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
