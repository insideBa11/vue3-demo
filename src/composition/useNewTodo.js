// 新输入的任务

import { ref } from 'vue';
import { generateId } from '../util/todoStorage';

export default function useNewTodo(todoListRef) {
    let newTodoRef = ref(""); // 新任务的标题
    const addTodo = () => { // 任务对象
        const value = newTodoRef.value && newTodoRef.value.trim();
        if (!value) return;
        const todo = {
            title: value,
            id: generateId(),
            completed: false,
        }
        todoListRef.value.push(todo);
        newTodoRef.value = '';
    }

    return {
        newTodoRef,
        addTodo
    }
}