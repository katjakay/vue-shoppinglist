import './assets/main.css'
import { createApp } from 'vue'
import router from './router'
import App from './views/Home.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
