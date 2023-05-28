//import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

//app.component('test',{
//    template:'<h2>Teste</h2>'
//});

app.use(router)

app.mount('#app')


