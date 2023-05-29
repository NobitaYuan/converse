<template>
    <div class="SpecialFeature2">
        <commonTitle2 titleName="至酷精选 玩转潮流"></commonTitle2>
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
        imgUrl: "https://image.converse.com.cn/static/touts/20220911/TOUTS%20%20SMALL.jpg",
        slogan: "高帮鞋款",
    },
    {
        imgUrl: "https://image.converse.com.cn/static/touts/20220824/TOUTS%20%20SMALL.jpg",
        slogan: "低帮鞋款",
    },
    {
        imgUrl: "https://image.converse.com.cn/static/touts/20230406/toutssmall.jpg",
        slogan: "时尚厚底鞋",
    },
]);
</script>

<style lang="scss" scoped>
.SpecialFeature2 {
    max-width: 1000px;
    margin: 40px auto 0;
    .product {
        margin: 20px auto 0;
        display: flex;
        justify-content: space-between;
        .product-items {
            width: 32%;
            margin-left: 1.92%;
            &:first-child{
                margin-left:0
            }
        }
    }
}
</style>
