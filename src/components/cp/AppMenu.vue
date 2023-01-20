<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in props?.model" :key="item">
            <AppMenuItem v-if="!item.separator" :item="item" :index="i" :root="true" @menuitem-click="onMenuItemClick"></AppMenuItem>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>
<script async setup>
import { watch,ref } from 'vue'
const props = defineProps({
  model: Array
})
const emit = defineEmits(['menuitem-click'])
const onMenuItemClick = (event) => {
 emit('menuitem-click', event)
}
const bannerImage = () => {
    return '' //this.$appState.darkTheme ? 'images/banner-primeblocks-dark.png' : 'images/banner-primeblocks.png';
}
//computed: {
 //darkTheme() {return this.$appState.darkTheme;},
//},
</script>
<style scoped></style>