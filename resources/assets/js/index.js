require('./bootstrap');

import Vue from 'vue'
import store from './store'
import App from './App'
window.Vue = Vue;

const app = new Vue({
    el: '#todo-app',
    store,
    template: '<App/>',
    components: { App }
});
