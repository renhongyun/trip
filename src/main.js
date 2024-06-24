/*
 * @Author: renhongyun
 * @Date: 2024-03-21 15:32:19
 */


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "./assets/css/index.css"
import "normalize.css"
import App from './App.vue'
import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
createApp(App).use(router).use(createPinia()).mount('#app')

