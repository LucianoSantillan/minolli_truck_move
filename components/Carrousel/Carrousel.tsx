import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Paper } from '@mui/material';
import styles from './Carousel.module.css';
import { Pagination } from 'swiper';
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        text: 'El servicio fue excelente. El equipo fue puntual, cuidadoso y muy profesional. Recomiendo esta empresa de mudanzas a todos.',
        author: 'Juan Pérez',
    },
    {
        text: 'La mudanza fue rápida y sin problemas. El personal fue amable y eficiente. Estoy muy satisfecho con el servicio brindado.',
        author: 'María Rodríguez',
    },
    {
        text: 'Increíble experiencia de mudanza. El personal fue muy cuidadoso con nuestros artículos y todo llegó en perfecto estado. Sin duda, los contrataría de nuevo.',
        author: 'Carlos García',
    },
    {
        text: 'Una mudanza perfecta. El equipo fue muy organizado y trabajó de manera eficiente. No podríamos estar más felices con el servicio que recibimos.',
        author: 'Laura González',
    },
];

const Carousel: React.FC = () => {
    return (
        <div className={styles.container}>
            <Swiper slidesPerView={1} spaceBetween={10}
                modules={[Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                autoplay={{ delay: 3000 }} // Set the delay between swipes in milliseconds
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <Paper className={styles.slide} style={{ backgroundColor: '#fff' }}>
                            <div className={styles.reviewText}>{review.text}</div>
                            <div className={styles.reviewAuthor}>{review.author}</div>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
