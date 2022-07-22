import {ref, onMounted, onUnmounted, computed} from 'vue';
import {filter} from '../util/todoStorage';

const hashList = ['all', 'active', 'completed'];

export default function useFilter(todoListRef) {

    let hashPath = ref('all');
    const onHashChange = () => {

        let hash = location.hash.replace(/#\/?/, "");
        if (hashList.includes(hash)) {
            // 路径正确
            hashPath.value = hash;
        } else {
            // 路径错误
            location.hash = '#/all';
        }

    }
    onMounted(() => {
        window.addEventListener('hashchange', onHashChange)
    })

    onUnmounted(() => {
        window.removeEventListener('hashchange', onHashChange)
    })

    const filteredTodoListRef = computed(() => {
        return filter(todoListRef.value, hashPath.value);
    })

    const activeTodoListRef = computed(()=> {
        return filter(todoListRef.value, 'active').length;
    })

    const completedTodoListRef = computed(()=> {
        return filter(todoListRef.value, 'completed').length;
    })

    return {
        hashPath,
        filteredTodoListRef,
        activeTodoListRef,
        completedTodoListRef,
    }

}