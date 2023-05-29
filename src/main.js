import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/base.scss'
// 导入elementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).mount('#app')