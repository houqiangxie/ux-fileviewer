<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2025-02-25 11:49:11
-->
<script setup lang="ts">
// import H5PDF from '@/components/H5PDF.vue'
import { PPT, FileViewer, H5PDF,Excel } from './lib/main';
console.log('Excel: ', Excel);
// import { PPT, FileViewer, H5PDF } from '../dist/index.js';
// console.log('H5PDF: ', H5PDF);
const showModal = ref({ visible: true })
const url ='https://501351981.github.io/vue-office/examples/dist/static/test-files/test.xlsx'
// const url ='https://api.idocv.com/view/cKKZGMp'
// const url ='http://172.17.30.234:5888/api/sys/nFis?fileName=2024/4/29/fa720a69f1c943b2961f52a32de5fdfb/%E7%B3%BB%E7%BB%9F%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E5%BF%85%E7%9C%8B!.pdf&token=BsRD3HL8uWheHdn4Shq37kOhr50BZd0tw35VbhNCvV02KgM3uda5UdDI0TeJmIZNMrGyTiZLuAkADk04sFwo9%2B5sfStNZNJ7Y9wtY9M3Fm1IMO%2F7iSBkNX8z7Cq21n4b%2BB062Ok7PVjMw4k%2FrMHXjBHErDdRJhOdXL%2BRdQu8WAwPMlrEXrUPXAkMhNeaZz0jRa%2BQzh92PBvbbS7y8GVjlLfKCdi%2Bh%2FnTmPtKEvig2R%2F18y3d0YFX2Esiki49OvquWDMCleowmwFgY7k9hdX1wEVthKH%2FDONlbPLM1A2HbwPhsJBD67BWXxgU%2B%2BcIxhwg5FB3lL4pLeNwLXo53tzP6g%3D%3D'
// let url = ref()
// const fileChange = (e) => {
//   const file = e.target.files[0]
//   url.value = new Blob([file], { type: file.type }); // 直接转换为 Blob
// }

</script>

<template>
    <!-- <input type="file" @change="fileChange"/>  -->
      <Excel name="11" :url="url" />
      <!-- <H5PDF name="11" url="/myResource/64a52bb61934d3b74eadf41c.pdf" /> -->
      <!-- <FileViewer v-model:value="showModal.visible" name="11" url="/myResource/64a782fd19341b546485e36e.docx" /> -->
      <!-- <FileViewer v-model:value="showModal.visible" name="11" :url="url"  type="pdf"/> -->
      <!-- <div class="w-full h-[1000px] overflow-hidden">
        <PPT name="11" :url="url" />
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
