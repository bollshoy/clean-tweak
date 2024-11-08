import React, {useRef, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import reviews from '@/data/reviews.js';
import tick from '@/assets/icons/tick.svg';

import './ReviewSlider.css'

const ReviewSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="review-slider">
            <div className="review-slider__nav">
                <div ref={prevRef} className="swiper-button-prev"></div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    navigation={{prevEl: prevRef.current, nextEl: nextRef.current}}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        320: {slidesPerView: 1, spaceBetween: 10},
                        640: {slidesPerView: 1.5, spaceBetween: 15},
                        768: {slidesPerView: 2, spaceBetween: 20},
                        1024: {slidesPerView: 3, spaceBetween: 30},
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="review">
                                <div className="review__title">
                                    <img src={tick} alt="tick" className="review__img"/>
                                    <span className="review__name">{review.name}</span>
                                </div>
                                <p className="review__text">{review.review}</p>
                                <div className="stars">{review.stars}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div ref={nextRef} className="swiper-button-next"></div>
            </div>
        </div>
    );
};

export default ReviewSlider;
