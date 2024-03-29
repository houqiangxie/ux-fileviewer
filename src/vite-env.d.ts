/*
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2023-07-11 14:08:48
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  $: any;
  luckysheet:any;
}

declare module "luckyexcel";
declare module "vue3-pdfjs/esm";
declare module "pdfh5";
declare module "ofd.js";