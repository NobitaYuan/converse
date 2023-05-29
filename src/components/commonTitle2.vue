<template>
    <div class="commonTitle2">
        <img
            src="	https://image.converse.com.cn/static/logo/20221205/20221205logo-1.png"
            alt=""
        />
        <span>{{ titleName }}</span>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    titleName: {
        default: "converse",
    },
});
</script>

<style lang="scss" scoped>
.commonTitle2 {
    width: 100%;
    height: 50px;
    background: #464646;
    color: #fff;
    font-size: 18px;
    img {
        margin: 13px 11px 0 20px;
        float: left;
    }
    span {
        margin: 13px 0 0 0;
        float: left;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
    }
}
</style>
