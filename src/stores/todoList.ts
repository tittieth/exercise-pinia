import { defineStore } from "pinia";

interface IItem {
  item: string
  id: number
  completed: boolean
}

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: <IItem[]>[],
    id: 0
  }),
  actions: {
    addTodo(item: string) {
      this.todoList.push({ item, id: this.id++, completed: false})
    },
    deleteTodo(itemId: number) {
      this.todoList = this.todoList.filter((todo) => {
        return todo.id !== itemId
      })
    }
  }
})