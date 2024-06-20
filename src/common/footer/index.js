import React from 'react'
import './footer.scss';
import call from "../../assets/icons/phone-call.png";
import mail from "../../assets/icons/email.png";
import location from "../../assets/icons/maps-and-flags.png";
import insta from "../../assets/icons/instagram.png";
import photo01 from "../../assets/images/AM (7).jpg";
import photo02 from "../../assets/images/A_M_2509.jpg";
import photo3 from "../../assets/images/A_M_4766.jpg";
import photo4 from "../../assets/images/03.jpg";
import photo5 from "../../assets/images/A_M_4699.jpg";
import photo6 from "../../assets/images/A_M (26).jpg";
import photologo from "../../assets/icons/am full logo.png";
import google from "../../assets/icons/google.png";


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
                            <p>Subscribe to Our Exclusive Newsletter for the Latest Photography Tips, Trends, and Inspirations.</p>
                            <form action="mailto:amphotostudio15@gmail">
                                <div className='mail'>
                                    <input type='email' placeholder='Your Email' name="email" required />
                                </div>
                                <div className='subscr' >
                                    <button type='submit'>SUBSCRIBE NOW !</button>
                                </div>
                            </form>


                        </div>

                        <div className='photozone'>
                            <div className='photosim'>
                                <img src={photologo} alt="error" />
                            </div>

                            <div className='eighteve'>
                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={call} alt="error" />
                                    </div>
                                    <a href='callto:9909796518' target='_blank' rel="noreferrer">9909796518</a>
                                </div>

                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={location} alt="error" />
                                    </div>
                                    <a href='https://maps.app.goo.gl/Fp9DacwfA14mp7mG8' target='_blank' rel="noreferrer">𝖲𝗁𝗈𝗉 𝖭𝗈.324, 3th Floor, Angel Business Center-1,
                                        ABC Circle, Mota Varachha,
                                        Surat, Gujarat 394101
                                    </a>
                                </div>

                                <div className='flexdiv'>
                                    <div className='townum'>
                                        <img src={mail} alt="error" />
                                    </div>
                                    <a href='mailto:amphotostudio15@gmail.com' target='_blank' rel="noreferrer"> amphotostudio15@gmail.com</a>
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
                                    <img src={photo01} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo02} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo3} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo4} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo5} alt="error" />
                                </div>
                                <div className='imgsss'>
                                    <img src={photo6} alt="error" />
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
                            {/* <div className='threelogos'>
                                <div className='logosdeign'>
                                    <img src={facebook} alt="error" />
                                </div>
                            </div> */}
                            {/* <div className='threelogos'>
                                <div className='logosdeign'>
                                    <img src={twiter} alt="error" />
                                </div>
                            </div> */}
                            <div className='threelogos'>
                                <div className='logosdeign'>
                                    <a href="https://www.instagram.com/am_photo_studio_/" target='_blank' rel="noreferrer">
                                        <img src={insta} alt="error" />
                                    </a>
                                </div>

                            </div>
                            <div className='threelogos'>
                                <div className='logosdeign'>
                                    <a href="https://maps.app.goo.gl/Fp9DacwfA14mp7mG8" target='_blank' rel="noreferrer">
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
