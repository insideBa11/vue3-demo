<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
            class="new-todo"
            autofocus=""
            autocomplete="off"
            placeholder="What needs to be done?"
            v-model="newTodoRef"
            @keyup.enter=addTodo
        />
      </header>
      <section class="main">
        <input id="toggle-all"
               class="toggle-all"
               type="checkbox"
               :checked="AllComplete"
               @change='setAllCompleted'/>
        <label for="toggle-all">Mark all
          as complete</label>
        <ul class="todo-list">
          <li class="todo"
              :class="{ completed: item.completed, editing: editTodoRef === item }"
              v-for="item in filteredTodoListRef"
              :key="item.id">
            <div class="view">
              <input class="toggle"
                     type="checkbox" v-model="item.completed"/>
              <label @dblclick="changeEditTodoRef(item)">{{
                  item.title
                }}</label>
              <button class="destroy" @click="deleteTodo(item)"></button>
            </div>
            <input class="edit"
                   v-model="item.title"
                   type="text"
                   @blur="doneEditTodoRef"
                   @keyup.enter="doneEditTodoRef"
                   @keyup.esc="cancelChangeTodo(item)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
      <span class="todo-count">
            <strong>{{ activeTodoListRef }}</strong>
            <span>item{{ activeTodoListRef === 1 ? '' : 's' }} left</span></span>
        <ul class="filters">
          <li><a href="#/all"
                 :class="{selected:hashPath === 'all'}">All</a>
          </li>
          <li><a href="#/active"
                 :class="{selected:hashPath === 'active'}">Active</a>
          </li>
          <li><a href="#/completed"
                 :class="{selected:hashPath === 'completed'}">Completed</a>
          </li>
        </ul>
        <button class="clear-completed"
                style="display: none"
                v-show="completedTodoListRef"
                @click="deleteAll">
          Clear completed
        </button>
      </footer>
    </section>
  </div>

</template>

<script>
import useTodoList from './composition/useTodoList'
import useNewTodo from './composition/useNewTodo'
import useFilter from './composition/useFilter';
import useEditTodo from './composition/useEditTodo'
import deleteFn from './composition/useDelete'

export default {
  setup() {
    const todoListRef = useTodoList().todosRef;
    return {
      todoListRef,
      ...useNewTodo(todoListRef),
      ...useFilter(todoListRef),
      ...useEditTodo(todoListRef),
      ...deleteFn(todoListRef)
    }
  }
}
</script>
