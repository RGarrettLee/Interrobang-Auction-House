import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperParalax.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";

export default function SwiperParalax(props) {
  return (
    <>
      <Swiper color="secondary"
        style={{
          "--swiper-navigation-color": "#ff7043",
          "--swiper-pagination-color": "#ff7043",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              `url(${props.imageUrl})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <Typography variant="h2" fontFamily="Montserrat Alternates" color="secondary">{props.title}</Typography>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <Typography variant="h6" fontFamily="Roboto" color="secondary">Lot #{props.lot}</Typography>
          </div>
          <div className="text" data-swiper-parallax="-100"><br/>
            <p>
              <Typography variant="h5" fontFamily="Roboto" color="secondary">Artist's Description<hr/>{props.itemDescription}</Typography> 
              <br />
              
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <Typography variant="h2" fontFamily="Montserrat Alternates" color="secondary">By: {props.artistName} </Typography>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <Typography variant="h6" fontFamily="Roboto" color="secondary">Origin: {props.origin}</Typography>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <br></br>
            <p>
              <Typography variant="h5" fontFamily="Roboto" color="secondary"> About the Artist: <hr />
              {props.artistInfo}
            </Typography></p>
            
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <Typography variant="h2" fontFamily="Montserrat Alternates" color="secondary">{props.artMedium}</Typography>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <Typography variant="h6" fontFamily="Roboto" color="secondary">{props.created}</Typography>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              <Typography variant="h6" fontFamily="Roboto" color="secondary">{props.size}</Typography>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
