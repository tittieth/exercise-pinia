<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoList';
import { ref } from 'vue';

const todo = ref('');

const store = useTodoListStore();

const addTodoAndClearInput = (item: string) => {
    if (item.length === 0) {
        return
    }
    store.addTodo(item)
    todo.value = '';
}
</script>

<template>
  <div>
    <form @submit.prevent="addTodoAndClearInput(todo)">
        <input v-model="todo" type="text" /> 
        <button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
