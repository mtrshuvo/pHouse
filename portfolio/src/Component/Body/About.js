import React, { useEffect, useState, useRef } from 'react'
import 'react-slideshow-image/dist/styles.css';
import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap"
import { Slide, SlideshowRef } from 'react-slideshow-image';

import aboutimg from "../../assets/aboutpage/about.jpg"
import logo1 from "../../assets/logos/ocode.png"
import logo2 from "../../assets/logos/pran.png"
import logo3 from "../../assets/logos/pranup.jpg"
import logo4 from "../../assets/logos/sundrop1.png"
import logo5 from "../../assets/logos/yellow.webp"
import logo6 from "../../assets/logos/z.webp"
import { fontWeight } from '@mui/system';

const About = () => {
  const [style, setStyle] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalStyle, setModalStyle] = useState(false);
  const [size, setSize] = useState(0);

  // Toggle for Modal
  const toggle = () => {
    setModal(!modal);
    setTimeout(()=> {
      setModalStyle(!modalStyle)
    }, 500)
  }
  useEffect(() => {
    setStyle(true);
  }, [])

  useEffect(()=> {
    function updateSize(){
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize)

    return ()=> window.removeEventListener("resize",updateSize)
  },[])


  return (
    <div className='main' style={{overflowY: "auto"}}>
      <div className={`about-container`}
        style={{ transform: style && 'translateX(0%)', opacity: style && '1',
        // backgroundColor: '#f8f8f8'
         }}>
        <div className={`about-continer-wrapper`}
        >
          <div className='about'>
            <div className='about-profile-img pb-4'>
              <img src={aboutimg} alt={'profile image'} />
            </div>
            <h3>Jahan Iftekhar</h3>
            <div className='about-details mt-4'>
              <div className='about-info'>
                <p className='text-justify'>
                  While graduating in Media Studies and Journalism from the University of Liberal Arts Bangladesh, he
                  started his career in filmmaking with creating documentaries music videos and OVCs. Later he started
                  to make fashion films through Zurhem being the first brand. He created numerous industry standard
                  fashion films and his process of creations continues till date.
                  <span style={{
                    display: 'block',
                    marginTop: '1rem'
                  }}></span>
                  In his formative years Jahan has worked under many reputed directors and production houses
                  alongside. His journey stared in 2012 as assistant director of Amitabh Reza Chowdhury at Half Stop
                  Down. Later on, as an assistant director of Mezbaur Rahman Sumon in Facecard Production in 2013.
                  And then as a post-production supervisor under the director Dhrubo Hassan at Outcaste Films in 2014.
                  <span style={{
                    display: 'block',
                    marginTop: '1rem'
                  }}></span>
                  He is the founder director of A2Z Films, A full-fledged production company established in 2014. Under
                  his strict supervision, A2Z Films has successfully developed many documentary films, online video
                  commercials, Industrial and corporate videos, fashion advertising campaign.
                  <span style={{
                    display: 'block',
                    marginTop: '1rem'
                  }}></span>
                  His aim is to make full length feature films in the near future, to connect the audience through the art
                  of his storytelling.
                </p>
                <button onClick={toggle}>Read More</button>
              </div>
              <div className='about-bio'>
                <ul>
                  <li>
                    <p>
                      <span>Birthday:</span>Augest 23, 1992
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Age:</span>31
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Email:</span>iftekhar.zahan@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Phone:</span>+8801680714092
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Study:</span>Unversity of Liberal Arts <span className='university'>Bangladesh</span>
                    </p>
                  </li>
                  
                </ul>
              </div>
              <Modal isOpen={modal} toggle={toggle} size="lg" scrollable={true}
                style={{
                  maxWidth: '1000px', 
                  maxHeight: "450px", width: '95%', 
                  marginTop: "100px", 
                  transition : 'all 0.3s ease' ,
                  // marginLeft: '0',

                }} >
                <ModalHeader
                  toggle={toggle}>
                </ModalHeader>

                <ModalBody >
                  <div className='modal-wrapper'
                  style={{
                    transition: "1s ease",
                    transform: modalStyle && 'translateX(0%)', 
                    opacity: modalStyle && '1',
         }} 
                  >

                  {/* Skill Section */}
                  <div className='row mb-5'

                  >
                    <div className='col-md-12 left-side-skill'>
                      <h6 className='photography-skill-text'>Photography Skills</h6>
                      <div className='wedding-photography'>
                        <div className='wedding-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            95%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                      <div className='lifestyle-photography'>
                        <div className='lifestyle-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            75%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "75%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                      <div className='film-photography'>
                        <div className='film-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            50%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                    </div>
                    {/* <div className='col-md-2 middle-side-skill' >

                    </div> */}

                    {/* Right side div */}
                    {/* <div className='col-md-5 right-side-skill'>
                      <h6 className='language-skill-text'>Language Skills</h6>
                      <div className='wedding-photography'>
                        <div className='wedding-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            95%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                      <div className='lifestyle-photography'>
                        <div className='lifestyle-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            75%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "75%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>

                      <div className='film-photography'>
                        <div className='film-photography-sub'>
                          <span className='label'>
                            wedding Photography
                          </span>
                          <span className='number'>
                            50%
                          </span>
                        </div>
                        <div className="progress" style={{ height: "5px" }}>
                          <div className="progress-bar bg-dark" role="progressbar" style={{ width: "50%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* Fun facts section */}
                  {/* <span className='fun-fact-text mb-4'>Fun Facts</span>

                  <div className='flex-container mt-4 mb-4'>
                    <div className='project-done'>
                      <span className='total-number'>777+</span>
                      <span className='title-fact'>Projects Completed</span>
                    </div>
                    <div className='happy-clients'>
                      <span className='total-number'>777+</span>
                      <span className='title-fact'>Projects Completed</span>
                    </div>
                    <div className='on-going'>
                      <span className='total-number'>777+</span>
                      <span className='title-fact'>Projects Completed</span>
                    </div>
                  </div> */}

                  {/* Our Partener Section */}
                  <span className='partner-text mb-4'>Our Partners</span>

                  <div className='flex-container-partner mt-4'>
                    <Slide style={{ width: "100%" }} slidesToScroll={1} 
                    slidesToShow={size>800? 4: size > 500? 2 : 1}>
                      <div className='client-logo'>
                      <img src={logo1} />
                      </div>
                      <div className='client-logo'>
                      <img src={logo2} />
                      </div>
                      <div className='client-logo'>
                      <img src={logo3} />
                      </div><div className='client-logo'>
                      <img src={logo4} />
                      </div><div className='client-logo'>
                      <img src={logo5} />
                      </div>
                      <div className='client-logo'>
                      <img src={logo6} />
                      </div>
                      


                      {/* <div className='project-done'>
                <img src={first} />
              </div>
              <div className='happy-clients'>
                <img src={second} />
              </div>
              <div className='on-going'>
                <img src={first} />
              </div> */}
                    </Slide>
                  </div>
                  </div>



                </ModalBody>

              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;