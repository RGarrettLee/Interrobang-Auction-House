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
