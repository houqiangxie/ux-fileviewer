<!--
 * @Descripttion: 
 * @version:  文件预览组件
 * @Author: houqiangxie
 * @Date: 2022-08-04 11:28:22
 * @LastEditors: houqiangxie
 * @LastEditTime: 2025-02-25 09:55:23
-->
<template>
    <n-modal v-model:show="modalValue" class=" file-preview">
        <n-card :title="name" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>
                <img class="image" src="@/assets/close.png" alt="" @click="close">
            </template>
            <H5PDF v-if="fileType=='pdf'" :url="url" :name="name" :showType="showType"></H5PDF>
            <Docx v-if="fileType=='docx'" :url="url" :name="name"></Docx>
            <Excel v-if="fileType=='xlsx'||fileType=='xls'" :url="url" :name="name"></Excel>
            <PPT v-if="fileType=='pptx'||fileType=='ppt'" :url="url" :name="name"></PPT>
            <Txt v-if="fileType=='txt'" :url="url" :name="name"></Txt>
            <Ofd v-if="fileType=='ofd'" :url="url" :name="name"></Ofd>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { NModal, NCard } from 'naive-ui'
import PPT from '@/components/PPT.vue'
// import PDF from '@/components/PDF.vue'
import Excel from '@/components/excel/Excel.vue'
import Docx from '@/components/Docx.vue'
import Txt from '@/components/Txt.vue'
import H5PDF from '@/components/H5PDF.vue'
import Ofd from '@/components/Ofd.vue'
const { url, value, name = '查看文件', showType = 'default',type='' } = defineProps<{ url: string, value: boolean, name?: string, showType?: string,type?:string}>()
const a = ref(true)
const fileType = computed<string>(() => type|| url.split('.').pop()?.toLocaleLowerCase() as string)
const emits = defineEmits<{ (e: 'update:value', payload: boolean): void }>()

const modalValue = computed({
    get: () => value,
    set: (v) => emits('update:value', v)
})

const close = () => {
    emits('update:value',false)
}
</script>


<style lang="scss" scoped>
.file-preview{
    width:100vw;
    height:100vh;
    :deep(.n-card__content){
        height:calc(100vh - 103px)
    }
    .image{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
}
</style>