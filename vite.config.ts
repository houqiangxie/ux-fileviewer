/*
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-24 17:13:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 14:44:05
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from "path";
import AutoImport from "unplugin-auto-import/vite";
// import dts from "vite-plugin-dts";
const pathResolve = (dir: string): string => resolve(__dirname, ".", dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true, //ref转换
      },
      reactivityTransform: true, //解构保持响应式
    }),
    // dts({include:'src/lib/'}),
    // 自动引入
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ["vue"],
      resolvers: [
        // NaiveUiResolver(),
      ],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: "src/auto-import.d.ts",
      vueTemplate: true,
    }),
  ],
  server: {
    // 设置代理，根据我们项目实际情况配置
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    port: 82,
    hmr: { overlay: false },
    host: "0.0.0.0",
    proxy: {
      "/gateway": {
        target: "http://172.17.30.184:8899/",
        changeOrigin: true, // 是否跨域
        secure: false,
        rewrite: (path) => path.replace(/^\/gateway/, ""),
      },
      "/myResource": {
        target: "https://172.17.30.184:8888",
        changeOrigin: true, // 是否跨域
        secure: false,
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: pathResolve("src") }],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue",'naive-ui'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          'naive-ui': "naive-ui",
        },
      },
    },
    cssCodeSplit:true,
  },
});
