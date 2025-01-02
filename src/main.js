import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import setHue from './funcs/setHue'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
function setVh() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setVh())
setVh()
