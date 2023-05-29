<template>
    <div class="HotSell">
        <!-- 标题 -->
        <commonTitle titleName="热卖单品"></commonTitle>
        <!-- 头部用于切换的商品 -->
        <ul class="ul1">
            <li
                class="ul1-li"
                v-for="(item, index) in shopMenu"
                :key="index"
                @mouseover="handlerHover(index)"
            >
                <a class="item-title">{{ item.menuName }}</a>
                <a class="item-img">
                    <img :src="item.imgUrl" alt="" />
                </a>
            </li>
        </ul>

        <!-- 中间移动的三角线 -->
        <div class="move-line">
            <div :style="{ left: menuBarLeft }" class="move-line-menu"></div>
        </div>

        <!-- 可切换的商品列表 -->
        <div class="shopList">
            <!-- 缓入缓出 -->
            <transition-group name="fade">
                <!-- 每8项的ul -->
                <ul
                    v-show="index == hoverIndex"
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
                            :proid = "shopItem.proid"
                            :imgUrl="shopItem.img1"
                            :shopDesc="shopItem.desc"
                            :price="shopItem.originprice"
                            :desPrice="(shopItem.originprice*shopItem.discount*0.1).toFixed(2)"
                        ></shopItem>
                    </li>
                </ul>
            </transition-group>
        </div>

    </div>

   <!-- 查看更多 -->
   <div class="moreShop">
        <a> 查看所有{{ shopMenu[hoverIndex].menuName }}最新商品 </a>
    </div>


</template>

<script setup>
import commonTitle from "@/components/commonTitle.vue";
import shopItem from "@/components/shopItem.vue";
import { ref,onMounted } from "vue";
import {getProList} from '@/api/products'

onMounted(()=>{
    getProList(32,1).then(res=>{
        // console.log(res)
        // 初始化数据
        shopMenu.value[0].contentShops = res.data.slice(0,8)
        shopMenu.value[1].contentShops = res.data.slice(8,16)
        shopMenu.value[2].contentShops = res.data.slice(16,24)
        shopMenu.value[3].contentShops = res.data.slice(24,32)
    })
})


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
    },
    {
        menuName: "服饰",
        imgUrl: "https://image.converse.com.cn/static/home/homepage/top_01_05.jpg?2023040401",
        contentShops: [
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10025459052/10025459052_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Star Player 76男女撞色星箭板鞋",
                price: "549.00",
                desPrice: "469.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024742184/10024742184_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】El Distrito 2.0男女星箭低帮休闲鞋",
                price: "379.00",
                desPrice: "329.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10025870102/10025870102_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】One Star Pro男女翻毛皮滑板鞋",
                price: "599.00",
                desPrice: "",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024783102/10024783102_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】All Star CX男女喷漆感轻便休闲鞋",
                price: "649.00",
                desPrice: "559.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024360001/10024360001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】1970S男女高帮帆布鞋卡其色奶茶色",
                price: "599.00",
                desPrice: "529.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10025878050/10025878050_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 Plus男女拼接休闲鞋",
                price: "699.00",
                desPrice: "579.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024774274/10024774274_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX 机能风厚底鞋饼干鞋",
                price: "749.00",
                desPrice: "699.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10025436438/10025436438_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX男女户外机能风厚底鞋",
                price: "799.00",
                desPrice: "709.00",
            },
        ],
    },
    {
        menuName: "配件",
        imgUrl: "https://image.converse.com.cn/static/home/homepage/top_01_07.jpg?2023040401",
        contentShops: [
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10021005281/10021005281_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Star Player 76男女撞色星箭板鞋",
                price: "549.00",
                desPrice: "469.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10021138301/10021138301_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】El Distrito 2.0男女星箭低帮休闲鞋",
                price: "379.00",
                desPrice: "329.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10022528670/10022528670_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】One Star Pro男女翻毛皮滑板鞋",
                price: "599.00",
                desPrice: "",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024957286/10024957286_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】All Star CX男女喷漆感轻便休闲鞋",
                price: "649.00",
                desPrice: "559.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10023842001/10023842001_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】1970S男女高帮帆布鞋卡其色奶茶色",
                price: "599.00",
                desPrice: "529.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10022130247/10022130247_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 Plus男女拼接休闲鞋",
                price: "699.00",
                desPrice: "579.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10025859052/10025859052_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX 机能风厚底鞋饼干鞋",
                price: "749.00",
                desPrice: "699.00",
            },
            {
                imgUrl: "https://image.converse.com.cn/resources/product/10024953286/10024953286_1B_NEW.png?2023040401",
                shopDesc: "【男女同款】Chuck 70 AT-CX男女户外机能风厚底鞋",
                price: "799.00",
                desPrice: "709.00",
            },
        ],
    },
]);

// 12 37 63 88
const menuBarLeft = ref("12%");
const hoverIndex = ref(1);

const handlerHover = (index) => {
    hoverIndex.value = index;
    switch (index) {
        case 0:
            menuBarLeft.value = "12%";
            break;
        case 1:
            menuBarLeft.value = "37%";
            break;
        case 2:
            menuBarLeft.value = "63%";
            break;
        case 3:
            menuBarLeft.value = "88%";
            break;
    }
};
</script>

<style lang="scss" scoped>
.HotSell {
    max-width: 1000px;
    width: 100%;
    margin: 35px auto 0;

    .ul1 {
        display: flex;
        margin: 0 auto;
        justify-content: space-evenly;
        .ul1-li {
            width: 24%;
            height: 230px;
            margin-top: 20px;
            text-align: center;
            cursor: pointer;
            .item-title {
                display: block;
                font-size: 24px;
                line-height: 30px;
            }
            &:hover .item-title {
                text-decoration: underline;
            }
            .item-img {
                display: block;
                width: 100%;
                img {
                    width: 83.37%;
                }
            }
        }
    }
    .move-line {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
        height: 20px;
        position: relative;
        padding: 0 1.5%;
        color: #333;
        .move-line-menu {
            width: 39px;
            height: 21px;
            position: absolute;
            background: url("https://image.converse.com.cn/images/homepage/active.png")
                no-repeat scroll 0 0 transparent;
            top: 0;
            left: 12%;
            margin-left: -20px;
            transition: 0.7s;
        }
    }
    .move-line:before {
        content: "";
        width: 100%;
        background-color: #b7b7b7;
        height: 1px;
        position: absolute;
        top: 0;
        left: 1.5%;
    }

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
.moreShop {
    width: auto;
    height: auto;
    margin: 0 auto;
    text-align: center;
    a {
        line-height: 48px;
        font-size: 16px;
        width: 420px;
        height: 48px;
        padding: 0 25px;
        border: 1px solid #000;
        background-color: #000;
        color: #fff;
        text-align: center;
        display: inline-block;
        transition: .2s linear;
        &:hover{
            background-color: #fff;
            color: #000;
        }
    }
}

// 缓入缓出
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
