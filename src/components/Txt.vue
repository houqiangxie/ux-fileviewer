<!--
 * @Descripttion: .txt预览
 * @version: 
 * @Author: houqiangxie
 * @Date: 2022-09-19 09:34:54
 * @LastEditors: houqiangxie
 * @LastEditTime: 2022-11-25 09:40:19
-->
<template>
    <div class="txt w-full h-full overflow-auto">
        <div v-html="renderText" class="whitespace-pre-wrap"></div>
    </div>
</template>

<script setup lang="ts">
const { name, url } = defineProps<{ name?: string, url: string }>()
const renderText = ref()
const getText = async () => {
    const text = await fetch(url)
    renderText.value = text.text()
}
onMounted(() => {
    getText()
})
</script>