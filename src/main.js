import Vue from 'vue'
import App from './App.vue'

// 产品构建信息是否提示
Vue.config.productionTip = false

// new Vue({
//     el = '#app',
//     render: function(h) {
//         return h(App)
//     }
// })
new Vue({
    render: h => h(App),

}).$mount('#app')