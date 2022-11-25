/*
 * @Descripttion: 
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-11-25 10:11:03
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 16:24:05
 */
import { App } from 'vue'
import FileViewer from '@/components/FileViewer.vue'
import Docx from '@/components/Docx.vue'
import PPT from '@/components/PPT.vue'
import PDF from '@/components/PDF.vue'
import Txt from '@/components/Txt.vue'
import Excel from '@/components/excel/Excel.vue'
// const files: any = import.meta.glob('/src/components/**/*.vue', { eager: true });
// interface Components extends Object{
//     [prop:string]:any
// }
// const componentsObj:any={}
// Object.keys(files).forEach(key => {
//     const name = key.replace(/\/src\/components(.*)\/|.vue/g, '')
//     componentsObj[name] = files[key].default || files[key];
// })

const componentsObj:any= {FileViewer,Docx,PPT,PDF,Txt, Excel}
export default {
    install: (app: App) => {
        for (const key of componentsObj) {
            app.component(key,componentsObj[key])
        }
    }
}
export { FileViewer, Docx, PPT, PDF, Txt, Excel };
