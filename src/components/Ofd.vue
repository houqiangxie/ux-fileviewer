<!--
 * @Descripttion: ofd预览
 * @version: 
 * @Author: houqiangxie
 * @Date: 2023-07-10 10:58:03
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-11 11:46:39
-->
<template>
  <div class="ofd-preview " ref="ofdId"></div>
</template>
<script setup lang="ts">
import { parseOfdDocument, renderOfd } from 'ofd.js'
const { url, name = 'ofd' } = defineProps<{ url: string, name?: string }>()
const ofdId = ref()
const renderFile = () => {
  parseOfdDocument({
    // ofd写入文件地址
    ofd: url,
    // ofd写入文件地址
    //ofd: process.env.VUE_APP_BASE_API + '/LicenseInformation/mineofdDownloadOFD?id=' + id,
    success(res: any) {
      console.log('res: ', res);
      //输出ofd每页的div
      if (res) {
        let screenWidth = 1600 //设置内容的显示框大小
        const divs = renderOfd(1600, res[0])//将流数据渲染给接受的div盒子
        ofdId.value.innerHTML = '' //进来先清空，防止上一条数据未被销毁
        for (const div of divs) {
          ofdId.value.appendChild(div)
        }
      }
    },
    fail(error: any) {
      console.log(error) //显示生成页面时发生的错误代码或错误消息 或者 页面加载
    }
  })
}

watchEffect(() => {
  if (url) renderFile()
})

// const download = () => {
//   new Download(url, name)
// };

</script>
<style lang="css" >
.ofd-preview ::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
}

.ofd-preview {
  height: 100%;
  width: 100%;
  overflow: auto;
  display: grid;
  place-items: center;
  position: relative;
  /* padding: 20px 0; */
  box-sizing: border-box;
  background-color: #fff;

  >div {
    margin-bottom: 0 !important;

    >div {
      display: none;
    }
  }
}

/* .pageContainer{
  max-width: 100% !important;
}
.ofdjs .ofdViewer{
  padding: 0 !important; */
/* } */</style>