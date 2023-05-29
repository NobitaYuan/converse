<template>
    <div class="NewSell">
    <!-- 标题 -->
    <commonTitle titleName="新品推荐"></commonTitle>
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
            {
                imgUrl: "https://image.converse.com.cn/resources/product/168504C244/168504C244_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】1970S男女高帮帆布鞋卡其色奶茶色",
                price: "599.00",
                desPrice: "529.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A00916C001/A00916C001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 Plus男女拼接休闲鞋",
                price: "699.00",
                desPrice: "579.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A03277C001/A03277C001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX 机能风厚底鞋饼干鞋",
                price: "749.00",
                desPrice: "699.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A04970C286/A04970C286_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX男女户外机能风厚底鞋",
                price: "799.00",
                desPrice: "709.00",
            },
        ],
    },
    {
        menuName: "女子鞋类",
        imgUrl: "https://image.converse.com.cn/static/home/homepage/top_01_1203.jpg?2023040401",
        contentShops: [
            {
                imgUrl: "https://image.converse.com.cn/resources/product/168816C001/168816C001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Star Player 76男女撞色星箭板鞋",
                price: "549.00",
                desPrice: "469.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/172895C001/172895C001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】El Distrito 2.0男女星箭低帮休闲鞋",
                price: "379.00",
                desPrice: "329.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A00915C281/A00915C281_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】One Star Pro男女翻毛皮滑板鞋",
                price: "599.00",
                desPrice: "",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】All Star CX男女喷漆感轻便休闲鞋",
                price: "649.00",
                desPrice: "559.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A02754C533/A02754C533_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】1970S男女高帮帆布鞋卡其色奶茶色",
                price: "599.00",
                desPrice: "529.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A06222C103/A06222C103_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 Plus男女拼接休闲鞋",
                price: "699.00",
                desPrice: "579.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A02757C830/A02757C830_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX 机能风厚底鞋饼干鞋",
                price: "749.00",
                desPrice: "699.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/A06221C188/A06221C188_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX男女户外机能风厚底鞋",
                price: "799.00",
                desPrice: "709.00",
            },
        ],
    }
]);

</script>

<style lang="scss" scoped>
.NewSell{
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
            .shopList-ul-li:nth-child(-n + 4) {
                border-bottom: 1px dotted #b7b7b7;
            }
        }
    }
}
</style>
