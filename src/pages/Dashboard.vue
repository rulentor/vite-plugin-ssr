<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import ProductService from '~/service/ProductService';

const products = ref(null);
const onProfile = ref(false)

const user = reactive({
  id: 0,
  login: null,
  role: null,
  birthday: null,
  first_name: null,
  last_name: null,
  patronymic: null,
  email: null,
  ballance: 0,
  address: null,
  bank_name: null,
  bank_card: null,
})
const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
]);
const lineOptions = ref(null);
const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
});

const formatCurrency = (value) => {
    return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
};
const showProfile = (data) => {
  user.id = data.id || 0 
  user.login = data.login || 'rozan'
  user.role = data.role || 'мл. модератор (забанен 1ч.)'
  user.birthday = data.bithday || '13.13.22'
  user.first_name = data.first_name || 'Иван'
  user.last_name = data.last_name || 'Рязанов'
  user.patronymic = data.patronymic || 'Порфирьевич'
  user.email = data.email || 'rozan@tair.ru'
  user.ballance = data.ballance || 12
  user.address = data.address || 'РФ Баден-Баден'
  user.bank_name = data.bank_name || 'Тинькофф'
  user.bank_card = data.bank_card || '****3232'
//
  onProfile.value = !onProfile.value
}

watch(
    //isDarkTheme,
    (val) => {
        if (val) {
            //applyDarkTheme();
        } else {
            //applyLightTheme();
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="grid">
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Пользователей</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
				<div>
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Регистраций" badge="8" badgeClass="p-badge-blue"/>        
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Конверсий из уник. в рег." badge="50" badgeClass="p-badge-blue"/>        
				  <!--Button class='mt-2 p-button-sm p-button-raised p-button-secondary p-button-text'>Просмотр регистраций</Button-->				
                </div>
            </div>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Счета по депозитам</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
				<div>
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Всего" badge="100" badgeClass="p-badge-blue"/>        
                  <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text" label="Сегодня депозитов" badge="1" badgeClass="p-badge-blue"/>        
				</div>	
                <div class="grid text-center">
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
					  <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.success="'13'"></i>
                    </span>
                    <p class="text-700 line-height-2">Конверсий рег. в депозиты</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="'100'"></i>
                    </span>
                    <p class="text-700 line-height-2">Сумма первых депозитов</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="'5'"></i>
                    </span>
                    <p class="text-700 line-height-2">Средний первый депозит</p>
                  </div>				  
                </div>		

            </div>
        </div>
        <div class="col-6 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Игры</span>
                        <div class="text-900 font-medium text-xl">28441 партий сыграно</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">20 принесло доход в казино</span>
                <span class="text-500">в прошедший месяц</span>
                <div class="grid text-center">
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
					  <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.success="'13'"></i>
                    </span>
                    <p class="text-700 line-height-2">Выигрыш игроков</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="'100'"></i>
                    </span>
                    <p class="text-700 line-height-2">Проигрыш игроков</p>
                  </div>
                  <div class="col-6 md:col-4 mb-1 px-2">
                    <span class="p-3 shadow-2 mb-1 inline-block surface-card" style="border-radius: 6px">
                      <i class="pi pi-apple mr-4 p-text-secondary text-1xl text-blue-300" style="font-size: 1.5rem" v-badge.danger="'5'"></i>
                    </span>
                    <p class="text-700 line-height-2">Средний процент успеха</p>
                  </div>				  
                </div>				
            </div>
        </div>
        <div class="col-12 lg:col-6 xl:col-3">
            <div class="card mb-0">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Техподдержка</span>
                        <div class="text-900 font-medium text-xl">152 обращений в системе</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">5 </span>
                <span class="text-500">выполнено за прошедший час</span>
            </div>
        </div>

        <Dialog header="Профиль пользователя" v-model:visible="onProfile" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '50vw'}" :maximizable="true" :modal="true">

            <div class="card">
                <div class="flex justify-content-between align-items-center mb-5">
                    <h5>Анкета #{{ user.id }}</h5>
                    <div>
                        <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
                        <Menu ref="menu2" :popup="true" :model="items"></Menu>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ user.first_name }} {{ user.patronymic }} {{ user.last_name }}</span>
							<span class="text-900 font-medium mr-2 mb-1 md:mb-0">{{ user.email }}</span>
                            <div class="mt-1 text-600">{{ user.role }}</div>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Анкета полная</span>
                            <div class="mt-1 text-600">{{ user.birthday }}, {{ user.address }}</div>
                        </div>
                    </li>
                    <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                        <div>
                            <span class="text-900 font-medium mr-2 mb-1 md:mb-0">Платёжные данные</span>
                            <div class="mt-1 text-600">{{ user.bank_name }}</div>
                            <div class="mt-1 text-600">{{ user.bank_card }} Баланс - {{ user.ballance }} монет</div>							
                        </div>
                        <div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">

                        </div>
                    </li>

                </ul>
            </div>

            <template #footer>
                <!--Button label="Yes" icon="pi pi-check" @click="closeMaximizable" autofocus /-->
            </template>
        </Dialog>

        <div class="col-12 xl:col-7">
            <div class="card">
                <h5>Таблица пользователей</h5>
                <DataTable :value="products" :rows="5" :paginator="true" responsiveLayout="scroll">
                    <Column style="" header="Id">
                        <template #body="slotProps">
                          {{ slotProps.data.id }}
                        </template>
                    </Column>
                    <Column field="name" header="Пользователь" :sortable="true" style="width: 45%"></Column>
                    <Column field="price" header="Депозиты" :sortable="true" style="width: 15%">
                        <template #body="slotProps">
                            {{ formatCurrency(slotProps.data.price) }}
                        </template>
                    </Column>
                    <Column header="Действия" style="width: 20%">
                        <template #body="{data}">
                            <Button icon="pi pi-search" type="button" class="p-button-text" @click='showProfile(data)'></Button>
							<Button icon="pi pi-pencil" type="button" class="p-button-text" @click='updateProfile(data)'></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>

        </div>

    </div>
</template>
