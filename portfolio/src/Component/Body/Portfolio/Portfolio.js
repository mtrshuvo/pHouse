import React, { useState, useRef, useEffect } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { PortfolioData } from './portfolioData'
import PortfolioNav from './PortfolioNav';


const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [link, setLink] = useState('');
  const allimagediv = useRef()



  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  // useEffect(()=> {
  //   Aos.init({duration: 2000,
  //     offset: 120,
    
  //   })
  // },[])

  return (
    <div className='main-port' id='portpage' style={{
      backgroundColor: "#f8f8f8",
    }}>
      <div className='main-port-wrapper' id='port-wrapper'>
        <div><PortfolioNav /></div>
        <div className='portfolio-flex-container'>
          {
            PortfolioData.map((val, ind) => {

              return (
                <>
                  <div className='thumbnail-div'  id='thumbDiv' ref={allimagediv} key={val} onClick={() => {
                    setLink(val.link)
                    openModal()
                  }

                  }>
                    {modal ? (
                      <section className="modal__bg">
                        <div className="modal__align">
                          <div className="modal__content" modal={modal}>
                            <IoCloseOutline
                              className="modal__close"
                              arial-label="Close modal"
                              onClick={setModal}
                            />
                            <div className="modal__video-align">
                              {videoLoading ? (
                                <div className="modal__spinner">
                                  <BiLoaderAlt
                                    className="modal__spinner-style"
                                    fadein="none"
                                  />
                                </div>
                              ) : null}
                              <iframe
            
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                // "https://www.youtube.com/embed/4UZrsTqkcW4"
                                src={link}
                                // {val.link}
                                title={val.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : null}

                    <img src={val.img} title={val.title} style={{ cursor: 'pointer', width: "100%" }} data-aos='fade-right' className='img-fluid' />

                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Portfolio