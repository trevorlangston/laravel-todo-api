<template>
    <div>
        <input 
        placeholder="add a new todo"
        :value="newTodo"
        @input="updateNewTodo"
        @keydown.enter="addTodo">
        <ol>
            <TodoListItem
                v-for="todo in todos"
                :todo="todo"
                :key="todo.id"/>
        </ol>
        <TodoErrors/>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import TodoErrors from './TodoErrors.vue'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['todos', 'newTodo', 'errors']),
    },
    methods: {
        updateNewTodo: function (e) {
            this.$store.commit('updateNewTodo', e.target.value);
        },
        addTodo: function () {
            this.$store.dispatch('addTodo');
        }
    },
    components: {
        TodoListItem,
        TodoErrors
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
