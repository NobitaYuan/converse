<template>
    <div class="swiper">
        <Swiper
            :modules="modules"
            effect="fade"
            :slides-per-view="1"
            :space-between="0"
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay="{ delay: 1000, disableOnInteraction: false }"
            :loop="true"
            :pagination="{ clickable: true }"
        >
            <swiper-slide
                ><img
                    src="https://image.converse.com.cn/static/kv/pc/2023042151_PC.jpg"
                    alt=""
            /></swiper-slide>
            <swiper-slide
                ><img
                    src="https://image.converse.com.cn/static/kv/pc/20230421cdp_PC.jpg"
                    alt=""
            /></swiper-slide>
            <swiper-slide
                ><img
                    src="	https://image.converse.com.cn/static/kv/pc/2022D11YLPC.jpg"
                    alt=""
            /></swiper-slide>
        </Swiper>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = ref([Navigation, Pagination, A11y]);
const onSwiper = (swiper) => {
    // console.log(swiper);
};
const onSlideChange = () => {
    // console.log("slide change");
};
</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
    ::v-deep .swiper-button-next{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #fff;
    }
    ::v-deep .swiper-button-next::after{
        color: #000;
        font-size: 15px;
        font-weight: bold;
    }
    ::v-deep .swiper-button-prev{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: #fff;
    }
    ::v-deep .swiper-button-prev::after{
        color: #000;
        font-size: 15px;
        font-weight: bold;
    }
    ::v-deep .swiper-pagination-bullet {
        height: 2px;
        width: 35px;
        background-color: #fff;
        opacity: 1;
    }
    ::v-deep .swiper-pagination-bullet-active{
        background-color: #000;
    }
}
</style>
