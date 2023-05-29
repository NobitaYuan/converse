<template>
    <div class="LatestSee">
    <!-- 标题 -->
    <commonTitle titleName="最近查看的商品"></commonTitle>
         <!-- 可切换的商品列表 -->
         <div class="shopList">
            <!-- 缓入缓出 -->
            <transition-group name="fade">
                <!-- 每8项的ul -->
                <ul
                    class="shopList-ul"
                    v-for="(list, index) in shopMenu"
                    :key="index"
                >
                    <li
                        class="shopList-ul-li"
                        v-for="shopItem in list.contentShops"
                        :key="shopItem.imgUrl"
                    >
                        <shopItem
                            :imgUrl="shopItem.imgUrl"
                            :shopDesc="shopItem.shopDesc"
                            :price="shopItem.price"
                            :desPrice="shopItem.desPrice"
                        ></shopItem>
                    </li>
                </ul>
            </transition-group>
        </div>
    </div>
</template>

<script setup>
import commonTitle from "@/components/commonTitle.vue";
import shopItem from "@/components/shopItem.vue";
import {ref} from 'vue'

const shopMenu = ref([
    {
        menuName: "男子鞋类",
        imgUrl: "https://image.converse.com.cn/static/home/homepage/top_02_1203.jpg?2023040401",
        contentShops: [
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A01607C001/A01607C001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Star Player 76男女撞色星箭板鞋",
                price: "549.00",
                desPrice: "469.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A03485C084/A03485C084_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】El Distrito 2.0男女星箭低帮休闲鞋",
                price: "379.00",
                desPrice: "329.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A04157C054/A04157C054_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】One Star Pro男女翻毛皮滑板鞋",
                price: "",
                desPrice: "599.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A03462C102/A03462C102_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】All Star CX男女喷漆感轻便休闲鞋",
                price: "649.00",
                desPrice: "559.00",
            },
        ],
    },
]);

</script>

<style lang="scss" scoped>
.LatestSee{
    max-width: 1000px;
    width: 100%;
    margin: 35px auto 0;
    .shopList {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-evenly;
        .shopList-ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .shopList-ul-li {
                width: 25%;
                margin-top: 20px;
                padding-bottom: 20px;
            }
        }
    }
}
</style>
