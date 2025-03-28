import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './styles/global.css'
import 'element-plus/dist/index.css'
import router from './router'
import $ from 'jquery'
window.$ = $
// import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')