import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { banner } from '@/data/banner.js';

import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container">
                <Swiper
                    modules={[Pagination]}
                    pagination={{clickable: true}}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                >
                    {banner.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="banner__content">
                                <p className="banner__text">{item.content}</p>
                                <span className="banner__title">- {item.title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;
