<template>
    <ul v-if="items">
        <template v-for="(item, i) of items">
            <li
                v-if="visible(item) && !item.separator"
                :key="item.label || i"
                :class="[{ 'menu-item': root, 'active-menuitem': activeIndex === i && !item.to && !item.disabled }]"
                role="none"
            >
                <template v-if="root">
                  <span class="menu-icon">
                    <i class="ri-book-2-fill"></i>
                  </span>
                  <div class="knopka-3">
                    <span class="menu-title">{{ item.label }}</span>
                  </div>					
                    <AppSubmenu :items="visible(item) && item.items" @menuitem-click="$emit('menuitem-click', $event)"></AppSubmenu>
                </template>
                <template v-else>
                    <router-link
                        v-if="item.to"
                        :to="item.to"
                        :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
                        :style="item.style"
                        @click="onMenuItemClick($event, item, i)"
                        :target="item.target"
                        exact
                        role="menuitem"
                        v-ripple
                    >
				  <span class="menu-icon">
                    <i :class="item.icon"></i>
					<span class="menu-title">{{ item.label }}</span>
                  </span>
                  <div class="knopka-3">
                    <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
					<!--i v-else class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i-->
                    <span v-if="item.badge" class="menu-title">{{ item.badge }}</span>
					<span v-else class="menu-title">{{ item.label }}</span>
                  </div>
                    </router-link>
                    <a
                        v-if="!item.to"
                        :href="item.url || '#'"
                        :style="item.style"
                        :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
                        @click="onMenuItemClick($event, item, i)"
                        :target="item.target"
                        role="menuitem"
                        v-ripple
                    >
				  <span class="menu-icon">
                    <i :class="item.icon"></i>
					<span>{{ item.label }}</span>
                  </span>
                  <div class="knopka-1">
                    <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>
                    <span v-if="item.badge" class="menuitem-badge menu-title">{{ item.badge }}</span>
                  </div>					
					
                    </a>
                    <transition name="layout-submenu-wrapper">
                        <AppSubmenu
                            v-show="activeIndex === i"
                            :items="visible(item) && item.items"
                            @menuitem-click="$emit('menuitem-click', $event)"
                        ></AppSubmenu>
                    </transition>
                </template>
            </li>
            <li class="p-menu-separator" :style="item.style" v-if="visible(item) && item.separator" :key="'separator' + i" role="separator"></li>
        </template>
    </ul>
</template>
<script async setup>
import { watch,ref } from 'vue'
const props = defineProps({
  model: Array,
  items: Array,
  root: {
    type: Boolean,
    default: false,
  },  
})

const activeIndex = ref(null)
const emit = defineEmits(['menuitem-click'])

const onMenuItemClick = (event, item, index) => {
  if (item.disabled) {
    event.preventDefault();
  return;
  }

  if (!item.to && !item.url) {
    event.preventDefault();
  }

  //execute command
  if (item.command) {
    item.command({ originalEvent: event, item: item });
  }

  activeIndex.value = index === activeIndex.value ? null : index
  emit('menuitem-click', {
    originalEvent: event,
    item: item,
  })
}
const visible = (item) => {
  //if(typeof item.visible === 'function') return item.visible()
  //if(item.visible !== false) return true
  //else return false
  return (typeof item.visible === 'function') ? item.visible() : item.visible !== false
}
</script>
<style scoped></style>
