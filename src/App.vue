<template>
  <TopNav></TopNav>
  <div style="height: 61px;"></div>
  <router-view/>
  <FooterNav></FooterNav>
  
  <FooterBeian></FooterBeian>
</template>
<script setup>
import TopNav from '@/components/TopNav.vue'
import FooterBeian from '@/components/FooterBeian.vue'
import FooterNav from '@/components/FooterNav.vue'
</script>
<style lang="scss">
</style>
