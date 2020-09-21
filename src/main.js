import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/style/reset.css'
import 'assets/style/border.css'
import 'assets/style/iconfont.css'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
    loading: require('assets/image/timg.jpg')
})

Fastclick.attach(document.body);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')