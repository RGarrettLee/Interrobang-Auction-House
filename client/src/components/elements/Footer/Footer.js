import React from 'react'
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';


const Footer = () => {
  return (
    <section className='footer'>
      <hr className='footer__line ' />
      <section className='footer__social'>
        <div className='footer__logo'><img src={require('../../images/logo.png')} width='200' /></div>
        <div className='footer__about'><Typography variant="h5" fontFamily="Montserrat Alternates">About us</Typography></div>
        <div className='footer__contact'>
          <div><Typography variant="h5" fontFamily="Montserrat Alternates">Contact us</Typography></div>
          <div><b>Phone: </b>555-555-5555</div>
          <div className='container p-2'>
            <div className="row">
              <div className="col"><a href='#'><InstagramIcon color="secondary" sx={{ fontSize: "40px" }} /></a></div>
              <div className="col"><a href='#'><FacebookIcon color="secondary" sx={{ fontSize: "40px" }} /></a></div>
            </div>
          </div>
        </div>
    </section>
    </section >
  )
}

export default Footer