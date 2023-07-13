<!--
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-13 15:00:18
-->
# Vue 3 + TypeScript + Vite  文件在线预览组件 支持PDF,Docx,PPT,Excel，Txt,ofd格式在线榆林

##使用方法
```javascript
import {FileViewer,Docx,PPT,Excel，Txt,H5PDF,Ofd} from 'uxfileviewer'
// 在main.js中引入css文件
import 'ux-fileviewer/dist/main.css'

// 文件路径最好使用通用前缀配置nginx转发，否则会导致跨越问题
// fileViewer是集齐所有文件预览组件弹窗展示
<FileViewer v-model:value="showModal.visible" name="11" url="/myResource/6360f0661934bf9dd65bb62d.pdf" />

 <H5PDF  url="/myResource/6360f0661934bf9dd65bb62d.pdf" />
```

## 在html中引入public中的文件
```html
<!-- 在这里全局引入luckysheet的样式文件和js文件  -->
      <script type="text/javascript" src="/pptx/js/jquery-1.11.3.min.js"></script>
      <link rel="stylesheet" href="/LuckySheet/pluginsCss.css" />
      <link rel="stylesheet" href="/LuckySheet/plugins.css" />
      <link rel="stylesheet" href="/LuckySheet/luckysheet.css" />
      <link rel="stylesheet" href="/LuckySheet/iconfont.css" />
      <script src="/LuckySheet/plugin.js"></script>
      <script src="/LuckySheet/luckysheet.umd.js"></script>
      <!-- pptx -->
      <link rel="stylesheet" href="/pptx/css/pptxjs.css">
      <link rel="stylesheet" href="/pptx/css/nv.d3.min.css"> <!-- for charts graphs -->
      <script type="text/javascript" src="/pptx/js/jszip.min.js"></script> <!-- v2.. , NOT v.3.. -->
      <script type="text/javascript" src="/pptx/js/filereader.js"></script>
      <script type="text/javascript" src="/pptx/js/d3.min.js"></script> <!-- for charts graphs -->
      <script type="text/javascript" src="/pptx/js/nv.d3.min.js"></script> <!-- for charts graphs -->
      <script type="text/javascript" src="/pptx/js/pptxjs.js"></script>
      <script type="text/javascript" src="/pptx/js/divs2slides.js"></script> <!-- for slide show -->
```



