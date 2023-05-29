<template>
    <div class="FooterNav sitemap clearfix">
        <div class="line"></div>
        <!-- 第一列dl -->
        <dl class="dl1 dl" v-for="(items, index) in dlList1" :key="index">
            <dt>
                <a>{{ items.dtName }}</a>
            </dt>
            <dd v-for="(item, index) in items.ddName" :key="index">
                <a>{{ item }}</a>
            </dd>
        </dl>
        <!-- 第二列dl -->
        <dl class="dl2 dl" v-for="(items, index) in dlList2" :key="index">
            <dt>
                <a>{{ items.dtName }}</a>
            </dt>
            <dd v-for="(item, index) in items.ddName" :key="index">
                <a>{{ item }}</a>
                <img v-if="items.imgUrl" :src="items.imgUrl" alt="">
            </dd>
        </dl>
    </div>
</template>

<script setup>
import { ref } from "vue";
const dlList1 = ref([
    {
        dtName: "男的",
        ddName: [
            "CHUCK TAYLOR ALL STAR",
            "CONVERSE CONS",
            "JACK PURCELL",
            "CHUCK II",
            "踩的",
            "穿的",
            "戴的",
            "优惠",
        ],
    },
    {
        dtName: "女的",
        ddName: [
            "CHUCK TAYLOR ALL STAR",
            "CONVERSE CONS",
            "JACK PURCELL",
            "CHUCK II",
            "踩的",
            "穿的",
            "戴的",
            "优惠",
        ],
    },
    {
        dtName: "儿童",
        ddName: [
            "CHUCK TAYLOR ALL STAR",
            "CONVERSE CONS",
            " ",
            " ",
            "踩的",
            "穿的",
            "戴的",
            "优惠",
        ],
    },
    {
        dtName: "GLOBAL",
        ddName: ["CONVERSE GLOBAL SITES"],
    },
    
]);

const dlList2 = ref([
    {
        dtName: "我的账户",
        ddName: [
            "会员中心",
            "现有订单",
            "过去订单",
            "退换货",
            "账户设置",
            "地址簿",
            "我的优惠券",
            "我的收藏",
        ],
    },
    {
        dtName: "帮助和购物指南",
        ddName: [
            "账户",
            "订单",
            "尺码",
            "退货和退款",
            "换货",
            "配送",
            "联系我们",
            "常见问题",
            "店铺分布",
        ],
    },
    {
        dtName: "CONVERSE 小程序",
        ddName: [
            "",
        ],
        imgUrl:'https://image.converse.com.cn/images/mp-qrcode.png'
    },
    {
        dtName: "NIKE",
        ddName: ["JORDAN"],
    },
    
]);
</script>

<style lang="scss" scoped>
.sitemap {
    max-width: 1000px;
    margin: 75px auto 0;
    text-align: center;
    .line {
        height: 30px;
        margin: 20px auto;
        max-width: 1000px;
        position: relative;
        text-align: center;
        &::before {
            background-color: #b7b7b7;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            top: 15px;
            width: 100%;
        }
    }

    .dl {
        width: 24%;
        height: 280px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        dt {
            margin-bottom: 20px;
            a {
                line-height: 20px;
                font-size: 16px;
                font-weight: bold;
            }
        }
        dd {
            height: 20px;
        }
    }
    .dl1{
        & dd:nth-child(5) {
            margin-bottom: 20px;
        }
    }
    .dl2{
        dd{
            img{
                width: 110px;
                height: 110px;
            }
        }
    }
}
</style>
