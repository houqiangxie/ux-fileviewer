<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-09-20 10:51:35
 * @LastEditors: houqiangxie
 * @LastEditTime: 2025-02-25 10:32:56
-->
<template>
    <div class="ppt-preview " ref="pptBox">
        <div ref="PPT" class="w-full h-full"></div>
    </div>
</template>

<script setup lang="ts">
import { init } from 'pptx-preview'
console.log('init: ', init);
const { name, url } = defineProps<{ name?: string, url: string }>()
const PPT = ref()
const pptBox = ref()
let pptxPreviewer
onMounted(async () => {
    pptxPreviewer = init(PPT.value, {
        width: pptBox.value.offsetWidth,
        height: pptBox.value.offsetHeight,
    })
    url&&pptxPreviewer.preview(url)
})
watchEffect(() => {
    if (url && pptxPreviewer) pptxPreviewer.preview(url)
})
</script>

<style lang="scss">
.ppt-preview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 0;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 0;
    }
    #ppt {
        margin: 0px;
        padding: 0px;
        position: absolute;
        width: 100%;
        left: 0px;
        top: 30px;
        bottom: 0px;
        // .slide{
        //     width: 100% !important;
        //     >div{
        //         width: 100% !important;
        //     }
        // }
    
        // .pptx-wrapper section {
        //     margin-bottom: 10px;
        //     border: 1px solid #eee;
        //     border-radius: 4px;
        //     box-shadow: none;
        // }
    }
}
</style>
