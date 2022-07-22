import {ref,computed} from 'vue';

export default function useEditTodo(todoListRef) {

    const editTodoRef = ref(null);

    let original = ref(null)

    const changeEditTodoRef = (todo) => {
        original.value = todo.title;
        editTodoRef.value = todoListRef.value[todoListRef.value.indexOf(todo)];
    }

    const doneEditTodoRef = () => {
        editTodoRef.value = null;
    }

    const cancelChangeTodo = (todo) => {
        todo.title = original.value;
        editTodoRef.value = null;
    }

    const AllComplete = computed(()=>{
        let key = true;
        for (let i = 0; i < todoListRef.value.length; i++) {
            if(todoListRef.value[i].completed === false){
                key = false;
            }
        }
        return key;
    })

    const setAllCompleted = () => {
        console.log(AllComplete.value);
        if (!AllComplete.value) {
            for (let i = 0; i < todoListRef.value.length; i++) {
                todoListRef.value[i].completed = true;
            }
        }else {
            for (let i = 0; i < todoListRef.value.length; i++) {
                todoListRef.value[i].completed = false;
            }
        }
    }

    return {
        editTodoRef,
        changeEditTodoRef,
        doneEditTodoRef,
        cancelChangeTodo,
        AllComplete,
        setAllCompleted
    }

}