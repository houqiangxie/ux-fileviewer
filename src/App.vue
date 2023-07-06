<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-06 11:38:55
-->
<script setup lang="ts">
import H5PDF from '@/components/H5PDF.vue'
const showModal = ref({visible: true})
</script>

<template>
      <H5PDF name="11" url="/myResource/64a52bb61934d3b74eadf41c.pdf" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
