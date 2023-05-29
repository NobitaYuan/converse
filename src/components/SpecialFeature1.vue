<template>
    <div class="SpecialFeature1">
        <commonTitle2 titleName="接头先型"></commonTitle2>
        <div class="product">
            <div
                class="product-items"
                v-for="(item, index) in SpecialFeatureItemList"
                :key="index"
            >
                <SpecialFeatureItem
                    :imgUrl="item.imgUrl"
                    :slogan="item.slogan"
                ></SpecialFeatureItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import commonTitle2 from "@/components/commonTitle2.vue";
import SpecialFeatureItem from "@/components/SpecialFeatureItem.vue";
import { ref } from "vue";
const SpecialFeatureItemList = ref([
    {
        imgUrl: "https://image.converse.com.cn/static/touts/20230421/toutbig.jpg",
        slogan: "就要开口笑",
    },
    {
        imgUrl: "https://image.converse.com.cn/static/touts/20230409/toutsbig.jpg",
        slogan: "晒出彩系列",
    },
]);
</script>

<style lang="scss" scoped>
.SpecialFeature1 {
    max-width: 1000px;
    margin: 40px auto 0;
    .product {
        margin: 20px auto 0;
        display: flex;
        justify-content: space-between;
        .product-items {
            width: 48.8%;
        }
    }
}
</style>
