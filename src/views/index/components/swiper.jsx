import React from "react";
// 引入 Swiper React 组件
import { Swiper, SwiperSlide } from "swiper/react";
// 引入 Swiper 样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/myswiper.scss"

// 引入需要的模块
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function MySwiper({List}) {
    const swiperList = List.map((item) => {
        return (
            <SwiperSlide className="swiper_item"  key={item}>
                <img src={item} alt="图片 1" />
            </SwiperSlide>
        )
    })
  return (
      <Swiper
    className="mySwiper"
      modules={[Navigation, Pagination, Autoplay]} // 使用的模块
      spaceBetween={30}                           // slide 之间间距
      slidesPerView={1}                          // 每页显示多少个slide
      // 显示左右导航箭头
      pagination={{ clickable: true }}          // 显示分页器，且可点击
      grabCursor={true} 
      loop={true}                               // 循环模式
    >
      
        {swiperList}
    </Swiper>
  );
}

export default MySwiper;