import { defineStore } from 'pinia'

export const useTodoTasksStore = defineStore('todoTasks', {
  state: () => {
    return {
      tasks: [] as TodoTask[],
      filter: 'ALL' as 'ALL' | 'COMPLETED' | 'READY_TO_START',
      nextId: 0
    }
  },
  getters: {
    filterTodoTasks(state) {
      if (state.filter === 'ALL') {
        return state.tasks;
      }
      return state.tasks.filter(task => task.status.toString() === state.filter)
    }

  },
  actions: {
    addTask(description: string) {
      this.tasks.push({ description, id: this.nextId++, status: TodoTaskStatus.READY_TO_START })
    },
    removeTask(task: TodoTask) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1)
    }
  },
  persist: {
    debug: true
  },
})

export interface TodoTask {
  id: number;
  description: string;
  status: TodoTaskStatus;
}

export enum TodoTaskStatus {
  COMPLETED,
  READY_TO_START,
}
