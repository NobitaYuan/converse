<template>
    <div class="shopItem" @click="$router.push({path:'/detail',query:{proid}})">
        <div class="box-img">
            <a>
                <img
                    :src="imgUrl"
                    alt=""
                />
            </a>
        </div>
        <div class="desc">
            <a>{{shopDesc}}</a>
        </div>
        <div v-if="price"  class="price">¥{{price}}</div>
        <div v-if="desPrice"  class="desPrice">¥{{desPrice}}</div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    imgUrl:{
        default:'https://image.converse.com.cn/resources/product/10021005281/10021005281_1B_NEW.png?2023040401'
    },
    shopDesc:{
        default:'【男女同款】Go 2男女休闲双肩包学生书包'
    },
    price:{
        default:'339.00'
    },
    desPrice:{
        default:'299.00'
    },
    proid:{
        default:''
    }
})


</script>

<style lang="scss" scoped>
.shopItem {
    width: 100%;
    height: 300px;
    position: relative;
    font-size: 14px;
    &:hover{
        border: 1px solid #b7b7b7;
        transition-duration: .3s;
    }
    .box-img {
        width: 165px;
        height: 180px;
        margin: 0 auto;
        position: relative;
        padding-top: 10px;
        a {
            width: 100%;
            height: 100%;
            display: block;
            padding-bottom: 15px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .desc {
        margin: 0 auto;
        max-width: 200px;
        margin-bottom: 5px;
        width: 100%;
        text-align: center;
        line-height: 18px;
        a {
            color: #333;
            outline: medium none;
            overflow: hidden;
            text-decoration: none;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .price {
        width: 100%;
        text-align: center;
        line-height: 18px;
        text-decoration:line-through
    }
    .desPrice{
        font-weight: bold;
        width: 100%;
        text-align: center;
        line-height: 18px;
        color: red;
    }
}
</style>
