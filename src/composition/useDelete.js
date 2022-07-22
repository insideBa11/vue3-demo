export default function deleteFn(todoListRef) {
    const deleteTodo = (item) => {
        console.log(item, todoListRef.value, todoListRef.value.indexOf(item));
        const index = todoListRef.value.indexOf(item);
        todoListRef.value.splice(index, 1);
    }

    const deleteAll = () => {
        todoListRef.value = [];
    }
    return{
        deleteTodo,
        deleteAll
    }
}