<!--
 * @Descripttion: PDFH5预览
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-06-17 09:31:01
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-13 11:14:23
-->
<template>
  <div class="pdf-preview " :id="pdfId"></div>
  <!-- <iframe class="pdf-preview " v-if="pdfType == 'iframe'" frameborder="0" :src="fileUrl"></iframe> -->
</template>
<script setup lang="ts">
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
import { Download } from '@/utils/common'
const { url, name = 'pdf', showType = 'default' } = defineProps<{ url: string, name?: string, showType?: string }>()
const fileUrl = ref(url)
const pdfType=ref(showType)
// if (showType == 'iframe') fileUrl.value += '#view=FitH,top'
const pdfId = 'pdf'+Date.now();
const pdfh5 = ref()
const renderPdf = ()=>{
  nextTick(() => {
    pdfh5.value = new Pdfh5('#'+pdfId, {
      pdfurl: fileUrl.value,
      renderType: 'svg'
    });
    // pdfh5.value.on("success", ( msg: any, time: any) => {
    //   console.log("信息：" + msg + "，耗时：" + time + "毫秒。");
    // });
  })
}

watchEffect(() => {
  if(url)renderPdf()
})
defineExpose({pdfh5})

</script>
<style lang="css" >
.pdf-preview ::-webkit-scrollbar {
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
  background-color: #e9e9e9;
  overflow: hidden;
}

.pageContainer{
  max-width: 100% !important;
  max-height: 10000px !important;
  margin-bottom: 0 !important;
  box-shadow: none !important;
}
.pdfjs .pdfViewer{
  padding: 0 !important;
}
</style>