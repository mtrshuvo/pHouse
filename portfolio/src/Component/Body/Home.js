import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaVimeo } from 'react-icons/fa'
import profileimg from "../../assets/homepage/home.jpg"
const Home = () => {
  const [style, setStyle] = useState(false);
  useEffect(()=> {
    setStyle(true)
  },[])

return (
  <div className='main'>
      <div className='main-container'>
        <div className={`container-wrapper ${style ? 'transformdiv': ''}`}>
          <div className='avatar'>
            <img src={profileimg} width="300px" alt='profile' />
          </div>
          <div className='details'>
            <h1>Jahan Iftekhar</h1>
            <p>Director Jahan Iftekhar is one of the most experienced and widely known Fashion Filmmakers in the
country. He has over 30 fashion films made under his planning and direction.</p>
            <ul className='social'>
              <li><a href=" https://www.facebook.com/jahanifte" target={'_blank'}><FaFacebook /></a></li>
              <li><a href="https://vimeo.com/a2zfilmsproduction" target={'_blank'}><FaVimeo /></a></li>
              <li><a href=" https://www.youtube.com/c/JahanIftekhar" target={'_blank'}><FaYoutube /></a></li>
              <li><a href=" https://www.instagram.com/jahaniftekharofficial" target={'_blank'}><FaInstagram /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
)
}

export default Home