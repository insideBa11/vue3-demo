const LOCAL_KEY = 'todomvc'

/**
 * 获取所有任务列表
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY)
    return result ? JSON.parse(result) : [];
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

/**
 * 获取一个随机数
 */

export function generateId() {
    return Date.now() + Math.random().toString(16).substr(2, 4);
}

/**
 * 过滤任务数组
 */
export function filter(todosListRef, hashPath = 'all') {

    if (hashPath === 'all') {
        return todosListRef;
    } else if (hashPath === 'active') {
        return todosListRef.filter(item => {
            return  !item.completed
        })
    } else if (hashPath === 'completed') {
        return todosListRef.filter(item => {
            return  item.completed
        })
    }
    throw new Error('invalid hashPath value')

}