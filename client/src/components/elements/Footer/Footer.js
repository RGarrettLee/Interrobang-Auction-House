import React from 'react'
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    <section className='footer'> 
      <hr className='footer__line ' />
      <section className='footer__social'>
        <div><img src={require('../../images/logo.png')} width='200'/></div>
        <div class="font">About us</div>
        <div class="font">Contact us
        <div class="font"> 555-555-5555</div>
        <div><a href='#'><InstagramIcon sx={{ fontSize: "40px" }} /></a></div>
        <div><a href='#'><FacebookIcon sx={{ fontSize: "40px" }} /></a></div>
        </div>
      </section>
    </section>
  )
}

export default Footer