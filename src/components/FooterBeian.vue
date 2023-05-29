<template>
    <div class="FooterBeian footer-wrapper">
        <div class="footer">
            <ul class="footer-list">
                <li v-for="(item, index) in footerList" :key="index">
                    <a>{{ item }}</a>
                </li>
            </ul>
            <div class="primary-logo">
                <img
                    src="https://image.converse.com.cn/images/commons/header-footer-new2.png"
                    alt=""
                />
            </div>
            <div class="footer-bottom">
                <a v-for="(items, index) in footerFooter" :key="index">
                    <img v-if="items.imgUrl" :src="items.imgUrl" alt="" />
                    {{ items.desc }}
                </a>
            </div>
            <div class="tip">
                <a>
                    <img
                        src="https://image.converse.com.cn/images/cautionIcon.png"
                        alt=""
                    />
                    <span
                        >亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</span
                    >
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const footerList = ref(["关于我们", "帮助和购物指南", "隐私政策", "使用规则"]);
const footerFooter = ref([
    {
        desc: "@匡威体育用品（中国）有限公司 保留所有权利",
    },
    {
        desc: "沪ICP备11044134号-2",
    },
    {
        imgUrl: "https://image.converse.com.cn/images/homepage/beiAn.png",
        desc: "沪公网安备 31011002001667号",
    },
    {
        imgUrl: "https://image.converse.com.cn/images/commons/business-license.png",
        desc: "电子营业执照     公司证照",
    },
]);
</script>

<style lang="scss" scoped>
.footer-wrapper {
    z-index: 98;
    width: 100%;
    position: relative;
    background-color: #000;
    color: #fff;
    .footer {
        height: 180px;
        margin: 0 auto;
        max-width: 1000px;
        position: relative;
        text-align: center;
        .footer-list {
            text-align: center;
            line-height: 30px;
            padding-top: 18px;
            width: auto;
            display: flex;
            justify-content: center;
            li {
                padding: 0 20px;
                a {
                    color: #fff;
                    font-size: 12px;
                }
            }
        }
        .primary-logo {
            display: inline-block;
            width: 66.5px;
            height: 50px;
            img {
                transform: scale(0.8);
                width: 100%;
                height: 100%;
            }
        }
        .footer-bottom {
            a {
                color: #fff;
                font-size: 12px;
                padding: 0 12px;
            }
        }
        .tip {
            padding-top: 10px;
            a {
                position: relative;
                display: inline-block;
                img {
                    width: 60px;
                }
                &:hover span{
                    display: block;
                }
                span {
                    position: absolute;
                    top: -79px;
                    left: 50%;
                    width: 248px;
                    text-align: left;
                    line-height: 18px;
                    margin-left: -135px;
                    display: none;
                    padding: 7px 8px;
                    background: #464646;
                    font-size: 12px;
                    color: #fff;
                }
            }
        }
    }
}
</style>
