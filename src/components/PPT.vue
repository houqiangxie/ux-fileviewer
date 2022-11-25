<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-09-20 10:51:35
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 10:08:21
-->
<template>
    <div class="ppt-preview ">
        <div id="ppt" ref="PPT"></div>
    </div>
</template>

<script setup lang="ts">
const { name, url } = defineProps<{ name?: string, url: string }>()
const PPT = ref()
onMounted(async () => {
    window.$("#ppt").pptxToHtml({
        pptxFileUrl: url,
        // fileInputId: "uploadFileInput", /*id of input tag*/
        // slideMode: true,
        slidesScale: "100%",
        keyBoardShortCut: false
    });
})

onBeforeUnmount(() => {
    // console.log('PPT.value: ', PPT.value);
    PPT.value.innerHTML=''
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
