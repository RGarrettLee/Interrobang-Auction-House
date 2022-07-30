import React, { useRef, useState } from "react";
import { SwiperCard } from '../index';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Images from '../../images/projects/index';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperGallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const AuctionItems = [
    {
        id: "00123",
        image: Images.htmlPortfolio,
        title: "The Littlefield Portfolio",
        closingDate: "2022/08/03",
        currentBid: '500',
        
    },
    {
        id: "00123",
        image: Images.petPlaydate,
        title: "Pet Playdate",
        closingDate: "2022/08/03",
        currentBid: '500',
    },
    {
        id: "00123",
        image: Images.flyteChecker,
        title: "FlyteChecker",
        closingDate: "2022/08/03",
        currentBid: '500',
    },
    {
        id: "00123",
        image: Images.horiseon,
        title: "Horiseon",
        closingDate: "2022/08/03",
        currentBid: 500,
    },
    {
        id: "00123",
        image: Images.wordwise,
        title: "Wordwise",
        closingDate: "2022/08/03",
        currentBid: '500',
    },
    {
        id: "00123",
        image: Images.jate,
        title: "Text Editor",
        closingDate: "2022/08/03",
        currentBid: '500',
    },

];

export default function SwiperGallery() {
    return (
        <>
            <Swiper 
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {AuctionItems.map((project) =>
                <SwiperSlide>
                        <SwiperCard title={project.title} image={project.image} alt={project.alt} tech={project.tech} description={project.description} repository={project.repository} deployed={project.deployed} />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
