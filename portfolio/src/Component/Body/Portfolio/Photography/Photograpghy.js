import React, { useState } from 'react'
import PortfolioNav from '../PortfolioNav'
import { PortfolioData } from './photoData';
const Photograpghy = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [data, setData] = useState('')

  const imageCards = PortfolioData.map((val) => (
    <div className='thumbnail-div'  id='thumbDiv'>
    <div data-aos="fade-right" >
    <img  onClick={() => showImage(val)} src={val.img} style={{ cursor: 'pointer', width: '100%' }} />
    </div>
    </div>

  ));

  const showImage = (image) => {
    setData(image)
    setImageToShow(image.img);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = PortfolioData.indexOf(data);
    if (currentIndex >= PortfolioData.length - 1) {
      setData(PortfolioData[0])
      setImageToShow(PortfolioData[0].img);
    } else {
      let nextImage = PortfolioData[currentIndex + 1];
      setData(nextImage)
      setImageToShow(nextImage.img);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = PortfolioData.indexOf(data);
    if (currentIndex <= 0) {
      setData(PortfolioData[PortfolioData.length - 1])
      setImageToShow(PortfolioData[PortfolioData.length - 1].img);
    } else {
      let nextImage = PortfolioData[currentIndex - 1];
      setData(nextImage)
      setImageToShow(nextImage.img);
    }
  };

  return (
    <div className='main-port' id='portpage' style={{
      backgroundColor: "#f8f8f8"
    }}>

      <div className='main-port-wrapper' id='port-wrapper'>
        <div><PortfolioNav /></div>
      <div className='portfolio-flex-container'>{imageCards}</div>
      {
        lightboxDisplay ?
          <>

            {/* <div className="overlay dismiss" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
              <img id="lightbox-img" src={imageToShow}></img>
              
              
              <button onClick={showNext}>⭢</button>
            </div> */}
            <span className="dismiss" onClick={hideLightBox}>
              X
            </span>
            <div id="lightbox" onClick={hideLightBox}>

              <button onClick={showPrev}>⭠</button>
              <img id="lightbox-img" src={imageToShow}></img>
              <button onClick={showNext}>⭢</button>
            </div>
          </>
          : ""
      }
    </div>
    </div>
  )
}

export default Photograpghy