<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 10:17:15
-->
<script setup lang="ts">
import FileViewer from '@/components/FileViewer.vue'
const showModal = ref({visible: true})
</script>

<template>
    <div>444
      <FileViewer v-model:value="showModal.visible" name="11" url="/myResource/6360f0661934bf9dd65bb62d.pdf" />
    </div>
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
