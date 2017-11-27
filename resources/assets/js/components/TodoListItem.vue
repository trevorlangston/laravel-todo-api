<template>
    <div class="wrapper">
        <li class="task">
            {{ todo.task }}
        </li>
        <div class="buttons">
            <!-- <button class="finish" @click="$emit('edit', todo.task)"> -->
            <!--     <i class="fa fa-check" aria-hidden="true"></i> -->
            <!-- </button> -->
            <!-- <button class="edit" @click="$emit('edit', todo.task)"> -->
            <!--     <i class="fa fa-pencil-square-o" aria-hidden="true"></i> -->
            <!-- </button> -->
            <button class="delete" @click="removeTodo(todo.id)">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeTodo: function(idToRemove) {
            this.$store.dispatch('removeTodo', idToRemove);
        },
    }
}
</script>

<style>
.wrapper {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 6fr 1fr;
}
.task {
    grid-column: 1;
    grid-row: 1;
}
.buttons {
    grid-column: 2;
    grid-row: 1;
    text-align: right;
}
button {
    background-color: #FFF;
    border-radius: 2px;
}
button:hover {
    background-color: #EEE;
}
button.finish {
    color: #5cb85c;
}
button.edit {
    color: #f0ad4e;
}
button.delete {
    color: #d9534f;
}
</style>
