<template>
    <div>
        <input 
        v-model="newTodo"
        placeholder="add a new todo"
        @keydown.enter="addTodo">
        <ol>
            <TodoListItem
                v-for="todo in todos"
                :todo="todo"
                :key="todo.id"
                @remove="removeTodo"
                />
        </ol>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
    data () {
        return {
            newTodo: '',
            todos: [],
            errors: {}
        }
    },
    methods: {
        addTodo: function () {
            axios.post('/api/todos', {
                task: this.newTodo
            })
                .then(resp => {
                    this.todos.push(resp.data.data); 
                })
                .catch(e => {
                    this.errors = e;
                })
            this.newTodo = '';
        },
        removeTodo: function(idToRemove) {
            axios.delete(`/api/todos/${idToRemove}`)
                .then(resp => {
                    this.todos = this.todos.filter(todo => {
                        return todo.id !== idToRemove
                    })
                })
                .catch(e => {
                    this.errors = e;
                })
        },
        fetchAllTodos: function() {
            axios.get('/api/todos', {
                task: this.newTodo
            })
                .then(resp => {
                    this.todos = resp.data.data; 
                })
                .catch(e => {
                    this.errors = e;
                })
        }
    },
    components: {
        TodoListItem
    },
    created () {
        this.fetchAllTodos()
    }
}
</script>

<style>
ol {
    list-style-position: inside;
    margin: 0;
    padding: 0;
}

input {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0;
}
</style>
