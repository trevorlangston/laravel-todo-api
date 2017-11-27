export default {
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
