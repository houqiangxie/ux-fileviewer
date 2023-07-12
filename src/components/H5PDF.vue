<!--
 * @Descripttion: PDFH5预览
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-06-17 09:31:01
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-07 11:31:56
-->
<template>
  <div class="pdf-preview " v-if="pdfType == 'default'" :id="pdfId"></div>
  <iframe class="pdf-preview " v-if="pdfType == 'iframe'" frameborder="0" :src="fileUrl"></iframe>
</template>
<script setup lang="ts">
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
import { Download } from '@/utils/common'
const { url, name = 'pdf', showType = 'default' } = defineProps<{ url: string, name?: string, showType?: string }>()
const fileUrl = ref(url)
const pdfType=ref(showType)
if (showType == 'iframe') fileUrl.value += '#view=FitH,top'
const pdfId = 'pdf'+Date.now();

const renderPdf = ()=>{
  nextTick(() => {
    const pdfh5 = new Pdfh5('#'+pdfId, {
      pdfurl: fileUrl.value,
      renderType: 'svg'
    });
    pdfh5.on("success", ( msg: any, time: any) => {
      console.log("信息：" + msg + "，耗时：" + time + "毫秒。");
    });
    pdfh5.on("error", ( msg: any, time: any) => {
      console.log("信息：" + msg + "，耗时：" + time + "毫秒。");
      fileUrl.value += '#view=FitH,top'
      pdfType.value == 'iframe'
    });
  })
}

watchEffect(() => {
  if(url)renderPdf()
})

// const download = () => {
//   new Download(url, name)
// };

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
}
.pdfjs .pdfViewer{
  padding: 0 !important;
}
</style>