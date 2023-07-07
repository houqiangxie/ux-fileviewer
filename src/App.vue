<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-07 11:30:52
-->
<script setup lang="ts">
import H5PDF from '@/components/H5PDF.vue'
import { PPT, FileViewer } from './lib/main';
const showModal = ref({visible: true})
</script>

<template>
      <H5PDF name="11" url="/myResource/64a52bb61934d3b74eadf41c.pdf" />
      <!-- <FileViewer v-model:value="showModal.visible" name="11" url="/myResource/64a782fd19341b546485e36e.docx" /> -->
      <!-- <FileViewer v-model:value="showModal.visible" name="11" url="/myResource/64a76db619342756dc599f93.docx" /> -->
      <!-- <div style="width: 600px;height:400px;">
        <PPT name="11" url="/myResource/64a66e0719344991bf931944.pptx" />
      </div> -->
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
