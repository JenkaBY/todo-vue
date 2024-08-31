import { defineStore } from 'pinia'

export const useTodoTasksStore = defineStore('todoTasks', {
  state: () => {
    return {
      tasks: [] as TodoTask[],
      filter: 'ALL' as 'ALL' | 'COMPLETED' | 'ACTIVE',
      nextId: 0
    }
  },
  getters: {
    filterTodoTasks(state) {
      if (state.filter === 'COMPLETED') {
        return state.tasks.filter((task) => task.isCompleted)
      }
      if (state.filter === 'ACTIVE') {
        return state.tasks.filter((task) => !task.isCompleted)
      }
      return state.tasks
    }
  },
  actions: {
    addTask(description: string) {
      this.tasks.push({ description, id: this.nextId++, isCompleted: false })
    },
    removeTask(task: TodoTask) {
      const indexToDelete = this.tasks.findIndex((t) => t.id === task.id)
      this.tasks.splice(indexToDelete, 1)
    }
  },
  persist: true
})

export interface TodoTask {
  id: number
  description: string
  isCompleted: boolean
}
