<!--
 * @Descripttion: PDFH5预览
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-06-17 09:31:01
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-06 10:34:30
-->
<template>
  <div class="pdf-preview " :id="pdfId"></div>
</template>
<script setup lang="ts">
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
import {Download } from '@/utils/common'
let { url, name='pdf', showType = 'default' } = defineProps<{ url: string, name?: string, showType?:string}>()
const pdfId = 'pdf'+Math.random();

const renderPdf = ()=>{
  const pdfh5 = new Pdfh5(pdfId, {
      pdfurl: url,
      renderType: 'svg'
    });
    // pdfh5.on("complete", (status: any, msg: any, time: any) => {
    //   console.log("状态：" + status + "，信息：" + msg + "，耗时：" + time + "毫秒。");
    // });
}

onMounted(() => {
  renderPdf()
})

// const download = () => {
//   new Download(url, name)
// };

</script>
<style lang="css" scoped>
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
}
.pdf-preview {
  position: relative;
  height: 100%;
  width: 100%;
  /* padding: 20px 0; */
  box-sizing: border-box;
  background-color: e9e9e9;
  overflow: hidden;
}

:deep(.pageContainer){
  max-width: 100% !important;
}
</style>