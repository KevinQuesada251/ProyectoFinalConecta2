import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/sliderCards.css';

import slide1 from '../assets/img/card1.jpg'; // ✅ CORRECTO
import slide2 from '../assets/img/card 2.jpg';
import slide3 from '../assets/img/card3.webp';

function SliderCards() {
    return (
        <div className="slider-wrapper">
            <h1 className="slider-heading">Ideas Principales</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <img src={slide1} alt="slide_image" />
                        <p className="slide-text">Visibilización de la brecha digital
 Permite identificar y mapear las zonas con baja o nula conectividad</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src={slide2} alt="slide_image" />
                        <p className="slide-text">Conciencia social y participación ciudadana
 Fomenta una comunidad activa </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide-content">
                        <img src={slide3} alt="slide_image" />
                        <p className="slide-text">Conciencia social y Apoyo a políticas públicas y toma de decisiones
</p>
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default SliderCards;
