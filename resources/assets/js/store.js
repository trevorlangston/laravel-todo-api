import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        newTodo: '',
        todos: [],
        errors: {}
    },
    getters: {
        todos(state) {
            return state.todos;
        },
        newTodo(state) {
            return state.newTodo;
        }
    },
    mutations: {
        updateNewTodo(state, text) {
            this.state.newTodo = text;
        },
        addTodo(state, todo) {
            this.state.todos.push(todo);
        },
        setTodos(state, todos) {
            this.state.todos = todos;
        },
        removeTodo(state, idToRemove) {
            this.state.todos = this.state.todos.filter(todo => {
                return todo.id !== idToRemove
            })
        }
    }
})
