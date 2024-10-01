import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Optionally, if you need additional modules like pagination, navigation:
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';



const MySwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation
            modules={[Navigation]}
        >
            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo2.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo3.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo2.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>
            
            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo2.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide >
                <img src="./logo3.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo2.png" alt="logo"/>
            </SwiperSlide>

            <SwiperSlide>
                <img src="./logo1.png" alt="logo"/>
            </SwiperSlide>
            
            {/* Add more slides as needed */}
        </Swiper>
    );
};

export default MySwiper;
