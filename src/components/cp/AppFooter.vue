<template>
    <div class="layout-footer">
        <img :src="logoUrl" alt="" height="20" class="mr-2" />
        Платформа
        <span class="font-medium ml-2">&copy; 2023</span>
    </div>
</template>
<script async setup lang="ts">
const logoUrl = computed(() => {
    //return `${contextPath}layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
   return 'logo-white.svg'
})
</script>
<style scoped></style>