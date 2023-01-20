доп полей нет

<template>
<div class="grid">

<div class="col-4 md:col-4 lg:col-4">
<div class="no-grid">
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать амбассадором</span>
                        <div class="text-900 font-medium text-xl">
						и раньше своих однокурсников сдать диплом или курсовую и получить отличную оценку в зачётку
						</div>
                    </div>
                    <!--div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div-->
					<div class="flex border-round align-items-center justify-content-top" style="width:2.5rem;height:auto">
					<!--Chip label="" icon="pi pi-plus" class="mr-1 mb-1" /-->
					<a href='/register'><i class="pi pi-plus text-blue-500 text-xl"></i></a>
					</div>
                </div>
                <span class="text-green-500 font-medium">+ 20 добавились</span>
                <span class="text-500">за последний час</span>
				<p>
				<a href='/register' title="Стать амбассадором" class="p-button-outlined p-button-success">Стать амбассадором</a>
				</p>
            </div>
        </div>
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать автором</span>
                        <div class="text-900 font-medium text-xl">
						и получать стабильный доход занимаясь в своё свободное время
						</div>
                    </div>
					<div class="flex border-round align-items-center justify-content-top" style="width:2.5rem;height:auto">
					<!--Chip label="" icon="pi pi-plus" class="mr-1 mb-1" /-->
					<a href='/register'><i class="pi pi-plus text-blue-500 text-xl"></i></a>
					</div>
                </div>
                <span class="text-green-500 font-medium">+ 1000</span>
                <span class="text-500">уникальных работ и документов</span>
				<p>
				<a href='/register' title="Стать автором" class="p-button-outlined p-button-success">Стать автором</a>
				</p>			
            </div>
        </div>
        <div class="col-12 md:col-12 lg:col-12">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Стать пользователем</span>
                        <div class="text-900 font-medium text-xl">
						и получить доступ ко всем возможностям платформы как VIP*
						</div>
                    </div>
					<div class="flex border-round align-items-center justify-content-top" style="width:2.5rem;height:auto">
					<!--Chip label="" icon="pi pi-plus" class="mr-1 mb-1" /-->
					<a href='/register'><i class="pi pi-plus text-blue-500 text-xl"></i></a>
					</div>
                </div>
                <span class="text-green-500 font-medium">+ 1000</span>
                <span class="text-500">уникальных работ и документов</span>
				<p>
				<a href='/register' title="Стать пользователем" class="p-button-outlined p-button-success">Стать пользователем</a>
				</p>				
            </div>
        </div>
</div>		
</div>
<div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <!--img src="images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3"-->
        <div class="text-900 text-3xl font-medium mb-3">Вход в систему</div>
        <a href='/register' class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Регистрация</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Запомнить меня</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Вспомнить пароль</a>
        </div>

        <Button label="Войти" icon="pi pi-user" class="w-full" @click="router.push('/')"></Button>
    </div>
</div>
        <!--div class="col-8 md:col-8 lg:col-8 m-0 py-7 px-16" style="border-radius:6px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">

                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Диплом за час</div>
                        <span class="text-600 font-medium">
						  <router-link to="/login" class="">Вход
						  </router-link>
						</span>
                    </div>
		</div-->
</div>		
</template>
<script async setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useCookies } from '@vueuse/integrations/useCookies'
import { useRoute, useRouter } from 'vue-router'
import fetch from 'cross-fetch'

const router = useRouter()
const toast = useToast()

const addAmbassadorOrder = ref(false)
const addStudyOrder = ref(false)
const addAuthorOrder = ref(false)

const actionRegister = () => {

}

const options = ref({
  job_type: [
    {id: 1, name: 'параметр'}
  ],
  font_name: [
    {id: 1, name: 'Arial'},
	{id: 2, name: 'Verdana'},
	{id: 3, name: 'Sans serif'},	
  ],
  font_size: [
    {id: 1, name: '8'},
    {id: 2, name: '9'},	
    {id: 3, name: '12'},	
  ],
})
const state = reactive({
  id: null,
  last_name: null,
  first_name: null,
  email: null,
  phone: null,
  title: null,
  tabs: null,
  interval: null,
  orygin: 0,
  sciense: null,
  pages: 0,
  dates: null,
  date_from: null,
  date_to: null,
})
const responsiveOptions = ref([
 {
    breakpoint: '1400px',
    numMonths: 2
 },
 {
    breakpoint: '1200px',
    numMonths: 1
 }
])

  onMounted(
    async () => { 
	  //if(initState()) init()
	}
  )
const cookies = useCookies(['locale']) 
</script>
<style scoped>
input, textarea{width:100% !important;}
.p-slider-horizontal, .p-inputtext {
    width: 14rem;
}
.p-slider-vertical {
     height: 14rem;
}

.special-day {
    text-decoration: line-through;
}

</style>
<route lang="yaml">
meta:
  layout: default
</route>
