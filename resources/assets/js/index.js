require('./bootstrap');

import Vue from 'vue'
import App from './App'
window.Vue = Vue;

const app = new Vue({
  el: '#todo-app',
  template: '<App/>',
  components: { App }
  // data: {
  //   todos: [],
  //   newTodo: ''
  // },
  // methods: {
  //   addTodo: function (message) {
  //     this.message = this.todos.push({
  //       text: this.newTodo
  //     });
  //     this.newTodo = '';
  //   }
  // }
});
