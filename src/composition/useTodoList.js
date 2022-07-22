import { ref, watchEffect } from 'vue';
import * as todoStorage from '../util/todoStorage';

export default function useTodoList() {

    let todosRef = ref(todoStorage.fetch());
    // watchEffect 是一个函数，可以接收一个参数函数
    // 当参数函数内有关的依赖发生改变时，会执行于依赖挂钩的语句
    watchEffect(() => {
        todoStorage.save(todosRef.value)
    })

    return {
        todosRef,
    }

}