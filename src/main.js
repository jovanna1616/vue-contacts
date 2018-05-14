import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'
import MyDirectives from './plugins/MyDirectives'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(MyDirectives)
// Vue.directive('focusOn', {
//   // inserted is hook
//   inserted: function(element, binding, vnode, oldnode) {
//     element.focus()
//     // console.log(element, binding, vnode, oldnode)
//   }
// })
// Vue.directive('demo', {
//   bind: function (el, binding) {
//     let stringify = JSON.stringify
//     el.innerHTML =
//       `
//       Name: ${stringify(binding.name)} <br>
//       Value: ${stringify(binding.value)} <br>
//       Expression: ${stringify(binding.expression)} <br>
//       Argument: ${stringify(binding.argument)}
//       `
//   }
// })
Vue.mixin ({
  created() {
    // console.log('Mixin from main.js')
  }
})
const routes = [
  { path: '/', redirect: '/contacts' },
  { path: '/contacts', component: Contacts, name: 'contacts' },
  { path: '/contacts/:id', component: Contacts, name: 'contact-details' },
  { path: '/add-contact', component: AddContact }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
