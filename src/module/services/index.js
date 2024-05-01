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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>
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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>

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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>
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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>
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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>
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
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo. </p>
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
                            <div className='hirenow'>
                                <button>HIRE US NOW</button>
                            </div>
                        </div>

                        <div className='fourimg'>
                            <div className='fourimg-grid'>
                                <div className='forwidth'>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>01.</span>
                                            <h5> Interactive Imagery</h5>
                                        </div>
                                        <p>Porro ipsum amet eiusmod, quae voluptate, architecto posuere risus imperdiet gravida porttitor, penatibus nemo dictumst quasi habitant.</p>
                                        <div className='girlphoto'>
                                            <img src={photo7} alt='error' />
                                        </div>
                                    </div>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>03.</span>
                                            <h5>Cutting Edge Techology</h5>
                                        </div>
                                        <p>Porro ipsum amet eiusmod, quae voluptate, architecto posuere risus imperdiet gravida porttitor, penatibus nemo dictumst quasi habitant.</p>
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
                                        <p>Porro ipsum amet eiusmod, quae voluptate, architecto posuere risus imperdiet gravida porttitor, penatibus nemo dictumst quasi habitant.</p>
                                        <div className='girlphoto'>
                                            <img src={photo8} alt='error' />
                                        </div>
                                    </div>
                                    <div className='maininteractive'>
                                        <div className='detail'>
                                            <span>04.</span>
                                            <h5>Best Photo-Session</h5>
                                        </div>
                                        <p>Porro ipsum amet eiusmod, quae voluptate, architecto posuere risus imperdiet gravida porttitor, penatibus nemo dictumst quasi habitant.</p>
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
