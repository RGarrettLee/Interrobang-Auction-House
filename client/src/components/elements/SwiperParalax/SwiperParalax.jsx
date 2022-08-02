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

export default function SwiperParalax(props) {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
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
            {props.title}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Lot #{props.lot}
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Dimensions: {props.size}
              <br />
              
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           Artist: {props.artistName}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Origin of Piece: {props.origin}
          </div>
          <div className="text" data-swiper-parallax="-100">
            <br></br>
            <h3>
              About this Item:
            </h3>
            <p>
              {props.itemDescription}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            About the Artist
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Learn more about this talented individual!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              {props.artistInfo}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
