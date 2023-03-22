<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-06-17 09:31:01
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-03-22 15:44:16
-->
<template>
  <div class="pdf-preview ">
    <template v-if="showType=='default'">
      <div class="pdf-wrap hidden-scroll-bar">
        <VuePdf v-for="page in state.numPages" :key="page" :src="state.source" :page="page" :style="scale" />
      </div>
      <div class="page-tool">
        <div class="page-tool-item" @click="pageZoomOut">放大</div>
        <div class="page-tool-item" @click="pageZoomIn">缩小</div>
        <div class="page-tool-item" @click="download">下载</div>
      </div>
    </template>
    <iframe v-if="showType =='iframe'" frameborder="0" :src="state.source" class="pdf-wrap hidden-scroll-bar"></iframe>
  </div>
</template>
<script setup lang="ts">
import { createLoadingTask, VuePdf } from "vue3-pdfjs/esm"; // 获得总页数
import {Download } from '@/utils/common'
let { url, name='pdf', showType = 'default' } = defineProps<{ url: string, name?: string, showType?:string}>()
if(showType == 'iframe')url +='#view=FitH,top'
const state = reactive({
  source:url,// 预览pdf文件地址
  pageNum: 1,// 当前页面
  scale: 1, // 缩放比例
  numPages: 0, // 总页数
});

const loadingTask = createLoadingTask(state.source);

onMounted(() => {
  loadingTask.promise.then((pdf: { numPages: number }) => {
    state.numPages = pdf.numPages;
  })
})

const scale = computed(() => `transform:scale(${state.scale})`)
function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1;
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1;
  }
}
function pageZoomOut() {
  if (state.scale < 2) {
    state.scale += 0.1;
  }
}
function pageZoomIn() {
  if (state.scale > 0.5) {
    state.scale -= 0.1;
  }
}

const download = () => {
  new Download(url, name)
}

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

.pdf-wrap {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

.vue-pdf-embed {
  text-align: center;
  width: 515px;
  border: 1px solid #e5e5e5;
  margin: 0 auto;
  box-sizing: border-box;
}

.page-tool {
  position: absolute;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  background: #2c3350;
  color: white;
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}

.page-tool-item {
  padding: 8px 15px;
  padding-left: 10px;
  cursor: pointer;
}
</style>