import React from 'react'
import './gallerygrid.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import photo10 from "../../assets/images/am-(3).jpg";
import photo11 from "../../assets/images/hirenbhumi.jpg";
import photo12 from "../../assets/images/A_M_6216.jpg";
import photo13 from "../../assets/images/gaurang-Nirjari.jpg";
import photo14 from "../../assets/images/A_M_2343.jpg";
import photo15 from "../../assets/images/A_M_3772.jpg";
import photo16 from "../../assets/images/A_M_4299.jpg";
import photo17 from "../../assets/images/A_M_4961.jpg";
import photo18 from "../../assets/images/A_M-(29).jpg";


export default function Gallerygrid() {
  return (
    <>
      <div className='bg-relative'>
        <div className='background-img-one'>
          <div className='backgound-overlay'>
            <div className='feature'>
              <h1>Gallery Grid</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='nineimgs'>
        <div className='container'>
          <div className='cameraimgs'>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo10} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo11} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo12} alt='error' />
              </div>
            </div>

            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo13} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo14} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo15} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo16} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo17} alt='error' />
              </div>
            </div>
            <div className='threeimgs'>
              <div data-aos="zoom-in" className='drigirl'>
                <img src={photo18} alt='error' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cameragirl-grid'>
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
