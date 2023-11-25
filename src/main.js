import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

Vue.Config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');


//import { createApp } from 'vue';
//import App from './App.vue';
//import vuetify from './plugins/vuetify';


//const app = createApp(App);

//app.use(vuetify);
//app.mount('#app');

//const app = createApp(App);

//app.config.productionTip = false;

//app.mount('#app');
