<template>
	<div :class="containerClass" @click="onWrapperClick">
        <Sidebar v-model:visible="addAmbassadorOrder" :baseZIndex="10000" position="right" class="p-sidebar" style='width:60vw'>
          <AddAmbassador />
        </Sidebar>	
        <Sidebar v-model:visible="addSupportTicket" :baseZIndex="10000" position="right" class="p-sidebar" style='width:60vw'>
          <AddSupport />
        </Sidebar>			
        <Sidebar v-model:visible="visibleOrder" :baseZIndex="10000" position="right" class="p-sidebar-lg">
          <h3>Сделанные работы</h3>
		  <div class="card">
            <h5>Архив всех заказов за текущий период</h5>
            <TreeTable :value="nodes" responsiveLayout="scroll">
                <Column field="name" header="Название" :expander="true" style="min-width:200px"></Column>
                <Column field="size" header="Исполнитель" style="min-width:200px"></Column>
                <Column field="type" header="Статус" style="min-width:100px"></Column>
                <Column field="action_chat" header="Чат" style="min-width:60px"></Column>				
            </TreeTable>
          </div>
        </Sidebar>	
	
        <AppTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                <router-view />
            </div>
            <AppFooter />
        </div>

		<AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" />
        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
</template>

<script async setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
//import NodeService from './service/NodeService'

const NodeService = null
const layoutMode = ref('static')
const staticMenuInactive = ref(false)
const overlayMenuActive = ref(false)
const mobileMenuActive = ref(false)
const menuActive = ref(false)
const menuClick = ref(false)
const nodes = ref()
const nodeService = ref(new NodeService())
// show state
const visibleOrder = ref(false)
const visibleSupport = ref(false)
const addAmbassadorOrder = ref(false)
const addSupportTicket = ref(false)

onMounted(() => {
 //nodeService.value.getTreeTableNodes().then(data => nodes.value = data)
})

const menuData = [
                {
                    label: 'Меню',
                    items: [
                        {
                            label: 'Главная страница',
                            icon: 'pi pi-fw pi-home',
                            to: '/',
                        },
						{   label: 'Сделать заказ', 
						    icon: 'pi pi-fw pi-sitemap', 
                            command: () => {
                                //window.location = 'https://github.com/primefaces/sakai-vue';
								addAmbassadorOrder.value = true
                            },
						},						
						{   label: 'Сделанные работы', 
						    icon: 'pi pi-fw pi-sitemap', 
                            command: () => {
                                //window.location = 'https://github.com/primefaces/sakai-vue';
								visibleOrder.value = true
                            },
						},

					
                    ],
                },


                {
                    label: 'Поддержка',
                    items: [
                        {
                            label: 'Справка',
                            icon: 'pi pi-fw pi-question',
                            to: '/help' 
                        },
                        {
                            label: 'Техническая поддержка',
                            icon: 'pi pi-fw pi-envelope',
                            command: () => {
                                //window.location = 'https://github.com/primefaces/sakai-vue';
								addSupportTicket.value = true
                            },
                        },
                    ],
                },
]
const menu = ref(menuData)
const onMenuToggle = () => {

}
const onWrapperClick = () => {

}
const onSidebarClick = () => {

}
const onMenuItemClick = () => {

}
const onLayoutChange = () => {

}
const containerClass = reactive([
    'layout-wrapper',
    {
      'layout-overlay': layoutMode.value === 'overlay',
      'layout-static': layoutMode.value === 'static',
      'layout-static-sidebar-inactive': staticMenuInactive.value && layoutMode.value === 'static',
      'layout-overlay-sidebar-active': overlayMenuActive.value && layoutMode.value === 'overlay',
      'layout-mobile-sidebar-active': mobileMenuActive.value,
      'p-input-filled': 'filled',//this.$primevue.config.inputStyle === 'filled',
      'p-ripple-disabled': false, //this.$primevue.config.ripple === false,
      'layout-theme-light': true, //this.$appState.theme.startsWith('saga'),
    },  
])
       
</script>
<style scoped lang="scss">
.sm-visible {
    display: none;
}

@media screen and (max-width: 40em) {
    ::v-deep(.sm-invisible) {
        display: none;
    }

    ::v-deep(.sm-visible) {
        display: inline;
        margin-right: .5rem;
    }
}
</style>
