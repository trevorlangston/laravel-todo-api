<template>
    <div>
        <TodoInput/>
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
import TodoInput from './TodoInput.vue'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['todos']),
    },
    components: {
        TodoListItem,
        TodoErrors,
        TodoInput
    }
}
</script>

<style>
ol {
    list-style-position: inside;
    margin: 0;
    padding: 0;
}
</style>
