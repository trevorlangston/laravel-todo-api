<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">My Todo List</div>
                    <div class="panel-body">
                        <TodoList/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    created () {
        this.$store.dispatch('setTodos');
    },
    components: {
        TodoList
    }
}
</script>
