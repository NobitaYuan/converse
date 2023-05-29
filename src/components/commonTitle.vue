<template>
    <div class="commonTitle">
        <h1>{{titleName}}</h1>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
    titleName:{
        default:'标题'
    }
})


</script>

<style lang="scss" scoped>
.commonTitle{
    height: 30px;
    margin: 20px auto;
    max-width: 1000px;
    position: relative;
    text-align: center;
    h1{
        position: relative;
        display: inline-block;
        font-weight: normal;
        line-height: 30px;
        font-size: 30px;
        padding: 0 40px;
        background: none repeat scroll 0 0 #fff;
    }
}
.commonTitle::before{
    background-color: #b7b7b7;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 15px;
    width: 100%;
}
</style>
