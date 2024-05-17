import React, { useEffect, useRef, useState } from 'react'
import './gallerygrid.scss';
import bosa2 from "../../assets/images/bosa-photography-img12.png";
import users from "../../assets/icons/users.png";
import videocamera from "../../assets/icons/video-camera.png";
import trophy from "../../assets/icons/trophy.png";
import camera1 from "../../assets/icons/camera1.png";
import photo10 from "../../assets/images/am-3.jpg";
import photo11 from "../../assets/images/hirenbhumi.jpg";
import photo12 from "../../assets/images/A_M_6216.jpg";
import photo13 from "../../assets/images/gaurang-Nirjari.jpg";
import photo14 from "../../assets/images/A_M_2343.jpg";
import photo15 from "../../assets/images/A_M_3772.jpg";
import photo16 from "../../assets/images/A_M_4299.jpg";
import photo17 from "../../assets/images/A_M_4961.jpg";
import photo18 from "../../assets/images/A_M-(29).jpg";
import close from "../../assets/icons/close.png";


const imageArray = [photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18]

export default function Gallerygrid() {
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
            {imageArray?.map((item) => {
              return (
                <div className='threeimgs'>
                  <div data-aos="zoom-in" className='drigirl' onClick={() => { setIsOpen(!isOpen); setImage(item) }}>
                    <img src={item} alt='error' />
                  </div>
                </div>
              )
            })}
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

      {isOpen && <div className='modal-wrapper'>
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
