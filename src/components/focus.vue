<template>
    <div class="focus">
        <h1>关注CONVERSE</h1>
        <p>
            Converse同时活跃在各类社交网络平台，点击下列你所喜爱的常用社交平台，密切关注Converse的最新产品与资讯。
        </p>
        <div class="flow clearfix">
            <a class="sina"></a>
            <a class="wechat"></a>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.focus {
    background: #464646;
    width: 100%;
    color: #fff;
    text-align: center;
    margin: 80px 0 0 0;
    padding-bottom: 80px;
    h1 {
        font-size: 30px;
        margin: 78px auto 35px;
        display: inline-block;
    }
    p {
        font-size: 16px;
        line-height: 24px;
    }
    .flow {
        width: 210px;
        margin: 37px auto 0;
        height: auto;
        text-align: center;
        a {
            background: url("https://image.converse.com.cn/images/homepage/share.png")
                no-repeat transparent;
            width: 75px;
            height: 75px;
            display: block;
            float: left;
            text-indent: -9999px;
            margin: 0 15px;
            padding: 0;
        }
        .sina{
            background-position: -75px 0;
            &:hover{
                background-position: 0 0;
            }
        }
        .wechat{
            background-position: -75px -75px;
            &:hover{
                background-position: 0 -75px;
            }
        }
    }
}
</style>
