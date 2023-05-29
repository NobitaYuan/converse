<template>
    <div class="product-item SpecialFeatureItem">
        <a class="product-img">
            <img :src="imgUrl" alt="" />
            <div class="mask"></div>
        </a>
        <a class="slogan">
            <h1>{{ slogan }}</h1>
        </a>
        <div class="productMore">
            <a>
                <img
                    src="https://image.converse.com.cn/images/arrow.png"
                    alt=""
                />
                查看更多
            </a>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    imgUrl: {
        default:
            "https://image.converse.com.cn/static/touts/20230421/toutbig.jpg",
    },
    slogan: {
        default: "就要开口笑",
    },
});
</script>

<style lang="scss" scoped>
.product-item {
    width: 100%;
    .product-img {
        display: block;
        width: 100%;
        position: relative;
        img {
            width: 100%;
        }
        .mask {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            background: url("https://image.converse.com.cn/images/search/mask.png")
                repeat;
            width: 100%;
            height: 100%;
            text-align: center;
        }
    }
    .product-img:hover .mask {
        display: block;
    }
    .slogan {
        h1 {
            font-size: 18px;
            line-height: 20px;
            font-weight: bold;
            margin: 17px 0 17px 0;
        }
        &:hover h1 {
            text-decoration: underline;
            transition: 0.3 linear;
            color: rgb(100, 98, 98);
        }
    }
    .productMore {
        margin-top: 16px;
        font-size: 16px;
        line-height: 20px;
        img {
            margin-right: 18px;
        }
    }
}
</style>
