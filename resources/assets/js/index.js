require('./bootstrap');

import Vue from 'vue'
import store from './store/index'
import App from './components/App'
window.Vue = Vue;

const app = new Vue({
    el: '#todo-app',
    store,
    template: '<App/>',
    components: { App }
});
