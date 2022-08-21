import React, { useEffect, useState } from 'react'
import PortfolioNav from '../PortfolioNav'
import { detailsData } from './detailsData';
import aboutimg from "../../../../assets/Picture1.png"

import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap"




const Details = () => {
  const [modal, setModal] = useState(false);
  const [modalStyle, setModalStyle] = useState(false);
  const [size, setSize] = useState(0);
  const [style, setStyle] = useState(false);

  // Toggle for Modal
  const toggle = () => {
    setModal(!modal);
    setTimeout(() => {
      setModalStyle(!modalStyle)
    }, 500)
  }

  useEffect(() => {
    setStyle(true);
  }, [])

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const imageCards = detailsData.map((val) => (
    <div className='thumbnail-div'  id='thumbDiv'>
    <div data-aos="fade-right" >
      <img style={{ cursor: 'pointer', width: "100%" }} onClick={toggle} src={val.img} />
    </div>
    </div>
  ));

  return (
    <div className='main-port' id='portpage' style={{
      backgroundColor: "#f8f8f8"
    
    }}>

      <div className='main-port-wrapper' id='port-wrapper'>
        <div><PortfolioNav /></div>
        <div className='portfolio-flex-container'>{imageCards}</div>

        <Modal isOpen={modal} toggle={toggle} size="lg" scrollable={true}
          style={{
            maxWidth: '1000px',
            maxHeight: "450px", width: '100%',
            marginTop: "100px",
            transition: 'all 0.3s ease',

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
                      <span>Address:</span>iftekhar.zahan@gmail.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Phone:</span>+8801680714092
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Study:</span>Unversity of Liberal Arts Bangladesh
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Freelance:</span>Available
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>

            </div>



          </ModalBody>

        </Modal>

      </div>
    </div>
  )
}

export default Details