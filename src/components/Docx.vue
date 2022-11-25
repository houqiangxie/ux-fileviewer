<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-08-04 17:41:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 10:28:06
-->
<template>
    <div class="docx-preview ">
        <div class="docx-content" ref="previewDocx" :style="scale"></div>
        <div class="page-tool">
            <div class="page-tool-item" @click="pageZoomOut">放大</div>
            <div class="page-tool-item" @click="pageZoomIn">缩小</div>
            <div class="page-tool-item" @click="download">下载</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as docx from 'docx-preview'
// import { get } from '@/utils/fetch/fetch'
import { Download } from '@/utils/common'
const { name, url } = defineProps<{ name?: string, url:string}>()
const state = reactive({
    scale:1.5
})
const previewDocx = ref()
onMounted(async () => {
    if (!url) return
    const res = await fetch(url)
    const blob = res.blob()
    docx.renderAsync(blob, previewDocx.value, previewDocx.value, { breakPages:false }) // 渲染到页面
})

const scale = computed(() => `transform:scale(${state.scale})`)
function pageZoomOut() {
    if (state.scale < 3) {
        state.scale += 0.1;
    }
}
function pageZoomIn() {
    if (state.scale > 1) {
        state.scale -= 0.1;
    }
}

const download = () => {
    new Download(url, name)
}
</script>

<style lang="css">




.docx-preview {
  position: relative;
  height: calc(100vh - 113px);
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: e9e9e9;
  overflow: hidden;
}

.docx-content{
    width:100%;
    height:100%;
    overflow: auto;
}
.docx-wrapper{
    background:#fff !important;
}

.page-tool {
  position: absolute;
  bottom: 15px;
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