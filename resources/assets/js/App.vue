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
    methods: {
        fetchAllTodos: function() {
            axios.get('/api/todos')
                .then(resp => {
                    this.$store.commit('setTodos', resp.data.data)
                })
                .catch(e => {
                    console.log(e);
                })
        }
    },
    created () {
        this.fetchAllTodos()
    },
    components: {
        TodoList
    }
}
</script>
