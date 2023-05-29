<template>
    <div class="BigShopItem clearfix">
        <div class="tetail-tab-list">
            <div class="tetail-tab-list-item share">
                <i class="i"></i>
                <span>分享</span>
            </div>
            <div class="tetail-tab-list-item favorite">
                <i class="i"></i>
                <span>加入收藏（1）</span>
            </div>
        </div>
        <div class="tetail-photo-area">
            <h3>{{ shuju.proname }}</h3>
            <p>
                价格 <span class="line">￥{{shuju.originprice}}</span
                ><span class="redColor"> ￥{{(shuju.originprice*shuju.discount*0.1).toFixed(2)}}</span>
            </p>
            <div class="zoomPad" ref="targetEle">
                <img :src="showImgUrl[currentIndex].smallUrl" alt="" />
                <div class="zoomPup" ref="mask" v-show="!isOutside"></div>
            </div>
            <div class="bigBox" ref="bigBox" v-show="!isOutside">
                <div class="contentBox">
                    <img
                        ref="bigImg"
                        :src="showImgUrl[currentIndex].bigUrl"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="tetail-shop-desc">
            <div class="other-product-list">
                <a>
                    <img
                        :src="shuju.img1"
                        alt=""
                    />
                </a>
            </div>
            <div class="product-info">
                <div class="type">
                    类别 : {{shuju.category}}<br />
                    品牌 : {{ shuju.brand }}
                </div>
                <div class="size">尺码对照表</div>
            </div>
            <div class="product-add-cart">
                <p class="title">尺码换算器</p>
                <div class="selectLine">
                    <div class="selectLine-left">尺码</div>
                    <div class="selectLine-right">
                        <select
                            placeholder="请选择数量"
                            class="select"
                            name=""
                            id=""
                        >
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                        </select>
                    </div>
                </div>
                <div class="selectLine">
                    <div class="selectLine-left">数量</div>
                    <div class="selectLine-right">
                        <select class="select" name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div class="shopbtn buyBtn">立即购买</div>
                <div class="shopbtn inCartBtn" @click="addShopToCart">加入购物车</div>
            </div>
        </div>
        <div class="bottom-area">
            <ul>
                <li
                    @click="changeCurrentIndex(index)"
                    v-for="(item, index) in footerImgUrl"
                    :key="index"
                >
                    <a :class="currentIndex == index ? 'activeA' : ''">
                        <img :src="item" alt="" />
                    </a>
                </li>
            </ul>
        </div>
        <div class="shopItemDesc">
            <ul>
                <li v-for="(item, index) in shopItemDesc">{{ item }}</li>
            </ul>
        </div>
        <div class="priceDesc">
            <h3>价格说明（此说明仅当出现价格比较时有效）</h3>
            <p>
                划线价格：划线的价格可能是商品的专柜吊牌价或正品零售价指导价或该商品的曾经展示过的销售价等，仅供您参考。<br />
                未划线价格：未划线的价格是商品在官网上的销售标价，具体的成交价格可能因为会员使用优惠券发生变化，最终以订单结算页价格为准。
            </p>
            <div class="shopTypeBtn">Chuck 70</div>
        </div>

    </div>
</template>

<script setup>
import { ref, watch,onMounted,defineProps } from "vue";
import { useMouseInElement } from "@vueuse/core";
import {useRoute} from 'vue-router'
import {getProDetail,addPro} from '@/api/products'
// 获取路由传参
const route = useRoute();
const proid = ref(route.query.proid)

const userId = ref('user_a341c119-28b3-46f6-bc2e-73eee3568932')

// 商品数据
const shuju = ref('')

onMounted(()=>{
    getShopDetail()
})
// 获取商品信息
const getShopDetail = ()=>{
    getProDetail(proid.value).then(res=>{
        // 初始化数据
        shuju.value = res.data
        // console.log(res.data)
        footerImgUrl.value[0] = res.data.img1
        footerImgUrl.value[1] = res.data.img2
        footerImgUrl.value[2] = res.data.img3
        footerImgUrl.value[3] = res.data.img4
        footerImgUrl.value[4] = res.data.img1
        footerImgUrl.value[5] = res.data.img2

        showImgUrl.value[0].smallUrl = res.data.img1
        showImgUrl.value[0].bigUrl = res.data.img1
        showImgUrl.value[1].smallUrl = res.data.img2
        showImgUrl.value[1].bigUrl = res.data.img2
        showImgUrl.value[2].smallUrl = res.data.img3
        showImgUrl.value[2].bigUrl = res.data.img3
        showImgUrl.value[3].smallUrl = res.data.img4
        showImgUrl.value[3].bigUrl = res.data.img4
        showImgUrl.value[4].smallUrl = res.data.img1
        showImgUrl.value[4].bigUrl = res.data.img1
        showImgUrl.value[5].smallUrl = res.data.img2
        showImgUrl.value[5].bigUrl = res.data.img2
    })
}

// 添加商品至购物车
const addShopToCart = ()=>{
    addPro(userId.value,shuju.value.proid,1).then(res=>{
        // console.log(res)
        alert(res.message)
    })
}


const footerImgUrl = ref([
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_1S_NEW.png?2023040401",
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_2S_NEW.png?2023040401",
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_3S_NEW.png?2023040401",
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_4S_NEW.png?2023040401",
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_5S_NEW.png?2023040401",
    "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_6S_NEW.png?2023040401",
]);
const showImgUrl = ref([
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_1H_NEW.png?2023040401",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_1L_NEW.png?2023040401",
    },
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_2H_NEW.png?2023040401",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_2H_NEW.png?2023040401",
    },
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_3H_NEW.png?2023040401",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_3L_NEW.png?2023040401",
    },
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_4H_NEW.png?202304040",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_4L_NEW.png?2023040401",
    },
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_5H_NEW.png?2023040401",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_5L_NEW.png?2023040401",
    },
    {
        smallUrl:
            "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_6H_NEW.png?2023040401",
        bigUrl: "https://image.converse.com.cn/resources/product/A06072C188/A06072C188_6L_NEW.png?2023040401",
    },
]);

const shopItemDesc = ref([
    "低帮休闲鞋，搭配帆布鞋面和鞋舌",
    "OrthoLite（欧索莱）鞋垫，帮助带来舒适体验",
    "大底围条上加持胶印花朵图案",
    "鞋带上点缀精巧立体花朵坠饰，增添春日氛围",
    "后跟设有精巧刺绣花卉",
]);

// 当前下标
const currentIndex = ref(0);

// 改下标事件
const changeCurrentIndex = (index) => {
    currentIndex.value = index;
};

const targetEle = ref(null);
const mask = ref(null);
const bigBox = ref(null);
const bigImg = ref(null);

const { isOutside, elementX, elementY } = useMouseInElement(targetEle);

watch([elementX, elementY], (newValue, oldValue) => {
    // 获取mask的宽高
    let maskWidth = mask.value.offsetWidth;
    let maskHeight = mask.value.offsetHeight;
    // 获取box的宽高
    let boxWidth = targetEle.value.offsetWidth;
    let boxHeight = targetEle.value.offsetHeight;

    // 设定位移
    // 基础位移
    let baseX = elementX.value - maskWidth / 2;
    let baseY = elementY.value - maskHeight / 2;

    // 根据盒子的宽度调整位移，使其不超出边界
    // x位移的范围
    let xRange = boxWidth - maskWidth;
    // y位移的范围
    let yRange = boxHeight - maskHeight;

    // 限制x位移
    if (baseX < 0) {
        baseX = 0;
    }
    if (baseX > xRange) {
        baseX = xRange;
    }
    // 限制y位移
    if (baseY < 0) {
        baseY = 0;
    }
    if (baseY > yRange) {
        baseY = yRange;
    }

    // 遮罩盒子的位移
    mask.value.style.left = baseX + "px";
    mask.value.style.top = baseY + "px";

    /* 
    小盒子    移动的盒子
    宽 450    宽 58px   
    高 450    高 145

    大盒子    显示盒子
    宽 1600    宽 200
    高 1600    高 510    
    */

    // 显示图片盒子的宽高
    //    let bigBoxWidth = bigBox.value.offsetWidth;
    //    let bigBoxHeight = bigBox.value.offsetHeight;
    // 图片的宽高
    let bigImgWidth = bigImg.value.offsetWidth;
    let bigImgHeight = bigImg.value.offsetHeight;

    //关系式： maskWidth/boxWidth = bigBoxWidth / bigImgWidth

    let offsetX = -baseX * (bigImgWidth / boxWidth);
    let offsetY = -baseY * (bigImgHeight / boxHeight);

    // 移动大图片
    bigImg.value.style.left = offsetX + "px";
    bigImg.value.style.top = offsetY + "px";
});
</script>

<style lang="scss" scoped>
.BigShopItem {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 60px;
    margin-top: 80px;
    // display: flex;
    .tetail-tab-list {
        width: 200px;
        position: absolute;
        top: 0;
        left: 0;
        .tetail-tab-list-item {
            height: 30px;
            width: auto;
            line-height: 30px;
            font-size: 14px;
            color: #333;
            position: relative;
            margin-bottom: 20px;
            .i {
                background: url("https://image.converse.com.cn/images/detail/detail.png")
                    no-repeat scroll 999px 999px transparent;
                display: block;
                width: 30px;
                height: 30px;
                position: absolute;
                top: 0;
                left: 0;
            }
            span {
                margin-left: 43px;
            }
        }
        .share .i {
            background-position: 0 0;
        }
        .favorite .i {
            background-position: 0 -43px;
        }
    }
    .tetail-photo-area {
        width: 520px;
        position: relative;
        margin-left: 180px;
        margin-right: 40px;
        z-index: 12;
        float: left;
        font-size: 22px;
        line-height: 38px;
        text-align: center;
        p {
            font-weight: bold;
            .line {
                text-decoration: line-through;
            }
            .redColor {
                color: red;
            }
        }
        .zoomPad {
            position: relative;
            width: 450px;
            height: 450px;
            margin: 0 auto;
            cursor: move;
            img {
                width: 450px;
                height: 450px;
            }
            .zoomPup {
                position: absolute;
                width: 58px;
                height: 145px;
                border: 1px solid #ccc;
                z-index: 101;
                background-color: #fff;
                opacity: 0.6;
                top: 0;
                left: 0;
            }
        }
        .bigBox {
            box-sizing: content-box;
            position: absolute;
            left: -215px;
            top: -7px;
            width: 200px;
            height: 510px;
            overflow: hidden;
            z-index: 110;
            border: 2px solid #e9e9e9;
            .contentBox {
                width: 100%;
                height: 100%;
                position: relative;
                background-color: #e2e2e2;
            }
            img {
                width: 1600px;
                height: 1600px;
                position: absolute;
                left: -500px;
                top: -500px;
            }
        }
    }
    .tetail-shop-desc {
        width: 200px;
        float: right;
        .other-product-list {
            a {
                display: block;
                width: 50px;
                height: 50px;
                line-height: 50px;
                border: 1px solid #b7b7b7;
                text-align: center;
                img {
                    width: 90%;
                    height: 90%;
                }
            }
        }
        .product-info {
            padding: 10px 0 20px 0;
            font-size: 12px;
            border-bottom: 1px solid #b7b7b7;
            margin-bottom: 20px;
            .type {
                margin-bottom: 15px;
            }
            .size {
                display: inline-block;
                font-size: 14px;
                border-bottom: 2px solid #999;
                &:hover {
                    color: #999;
                }
            }
        }
        .product-add-cart {
            .title {
                font-size: 16px;
                font-weight: bold;
                color: #333;
                margin-bottom: 20px;
            }
            .selectLine {
                font-size: 12px;
                line-height: 30px;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                .selectLine-left {
                    height: 30px;
                    width: 90px;
                    color: #333;
                }
                .selectLine-right {
                    width: 100px;
                    height: 30px;
                    .select {
                        outline: none;
                        border: 1px solid #333;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                    }
                }
            }
            .shopbtn {
                font-size: 16px;
                color: #fff;
                display: block;
                background-color: #000;
                font-weight: normal;
                text-align: center;
                height: 50px;
                width: 200px;
                line-height: 50px;
                cursor: pointer;
                box-sizing: border-box;
                cursor: pointer;
                transition: 0.3s;
                margin-top: 20px;
                &:hover {
                    opacity: 0.7;
                }
            }
            .inCartBtn {
                border: 1px solid #000;
                background-color: #fff;
                color: #000;
            }
        }
    }

    .bottom-area {
        float: left;
        width: 580px;
        margin: 0 auto;
        margin-left: 17%;
        ul {
            display: flex;
            justify-content: center;
            li {
                width: 72px;
                height: 72px;
                margin: 0 5px;
                a {
                    width: 100%;
                    height: 100%;
                    line-height: 72px;
                    display: block;
                    text-align: center;
                    img {
                        width: 60px;
                        height: 60px;
                    }
                    &:hover {
                        border: 1px solid #b7b7b7;
                    }
                }
                .activeA {
                    border: 1px solid #b7b7b7;
                }
            }
        }
    }
    .shopItemDesc {
        float: left;
        margin-top: 50px;
        margin-left: 20%;
        font-size: 12px;
        width: 580px;
        ul {
            li {
                list-style: disc;
            }
        }
    }
    .priceDesc {
        float: left;
        width: 580px;
        margin-left: 18%;
        h3 {
            margin: 30px 0;
            font-size: 18px;
        }
        p {
            font-size: 12px;
        }
        .shopTypeBtn {
            // float: left;
            height: 48px;
            width: auto;
            text-align: center;
            line-height: 50px;
            color: #fff;
            background-color: #000;
            display: inline-block;
            font-size: 16px;
            margin: 40px auto 0;
            cursor: pointer;
            padding: 0 84px;
            border: 1px solid #000;
            text-align: center;
            margin-left: 50%;
            transform: translateX(-50%);
            &:hover{
                border: 1px solid #000;
                color: #000;
                background-color: #fff;
                transition: all .3s;
            }
        }
    }
}
</style>
