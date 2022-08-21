import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const PortfolioNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div style={{
      
    }}><span className='portfolio-title'>Portfolio</span>
    <div className='navbar-flex-container row'>
      <div className='navbar-left col-12 col-lg-7'>
        <span className='navbar-title'>Creative Portfolio</span>
      </div>
      <div className='navbar-item col-12 col-lg-5' id='port-nav-links'>
      <span className='Navbar-list' onClick={()=>navigate('/portfolio')}>Youtube</span>
        {/* <span className='Navbar-list' >Vimeo</span> */}
        {/* <span className='Navbar-list' onClick={()=>navigate('/youtubenav')}>Youtube</span> */}
        <span className='Navbar-list' onClick={()=>navigate('/photonav')}>Photography</span>
        <span className='Navbar-list' onClick={()=>navigate('/detailnav')}>Details</span>
      </div>

    </div></div>
  )
}

export default PortfolioNav