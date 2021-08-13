import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import Dexie from 'dexie'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  el: '#app',
  data: {
    item: '+ Add New ...',
    // item: {
    //   text: '',
    // },
    items: [
      {
        text: 'first item',
      },
    ],
  },
  methods: {
    addNew() {
      const { text } = this.item;
      this.items.push({ text });
      this.item.text = '';
    },
  },
}).$mount('#app');
