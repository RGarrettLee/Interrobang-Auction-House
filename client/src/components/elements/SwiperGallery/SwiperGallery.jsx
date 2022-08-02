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

import { useQuery } from '@apollo/client';
import { QUERY_AUCTION_ITEMS } from '../../../utils/queries';

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const AuctionItems = [
    {
        id: "00123",
        image: Images.htmlPortfolio,
        title: "The Littlefield Portfolio",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
        
    },
    {
        id: "00123",
        image: Images.petPlaydate,
        title: "Pet Playdate",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
    },
    {
        id: "00123",
        image: Images.flyteChecker,
        title: "FlyteChecker",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
    },
    {
        id: "00123",
        image: Images.horiseon,
        title: "Horiseon",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
    },
    {
        id: "00123",
        image: Images.wordwise,
        title: "Wordwise",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
    },
    {
        id: "00123",
        image: Images.jate,
        title: "Text Editor",
        slide1desc: "",
        itemValue: "",
        startingBid: "",
        currentBid: '500',
        closingDate: "2022/08/03",
        slide2title: "",
        slide2subtitle: "",
        slide2desc: "",
        slide3title: "",
        slide3subtitle: "",
        slide3desc: "",
    },

];

export default function SwiperGallery() {
    const { loading, error, data } = useQuery(QUERY_AUCTION_ITEMS);
    const items = data?.allAuctionItems || [];
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
                {items.map((item) =>
                <SwiperSlide>
                        <SwiperCard id={item.lot} image={item.images} title={item.name} closingDate={item.closingDate} currentBid={item.currentBidValue } />
                </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
