import { describe, expect, it } from 'vitest'
import { TodoTaskStatus, useTodoTasksStore } from '@/stores/todoTasks.ts'
import { createTestingPinia } from '@pinia/testing'
import { createPinia, setActivePinia } from 'pinia'

describe('Todo Task store', () => {
  it('initial state of task should be the following', () => {
    setActivePinia(createPinia())

    const todoStore = useTodoTasksStore()

    expect(todoStore.tasks).toEqual([])
    expect(todoStore.filter).toEqual('ALL')
    expect(todoStore.nextId).toEqual(0)
  })

  it.each([
    [[{ id: 0, status: 'COMPLETED' }, { id: 1, status: 'READY_TO_START' }],
      [{ id: 0, status: 'COMPLETED' }],
      'COMPLETED'
    ],
    [[{ id: 0, status: 'COMPLETED' }, { id: 1, status: 'READY_TO_START' }],
      [{ id: 1, status: 'READY_TO_START' }],
      'READY_TO_START'
    ],
    [[{ id: 0, status: 'COMPLETED' }, { id: 1, status: 'READY_TO_START' }],
      [{ id: 0, status: 'COMPLETED' }, { id: 1, status: 'READY_TO_START' }],
      'ALL'
    ],
    [[{ id: 0, status: 'COMPLETED' }, { id: 1, status: 'READY_TO_START' }],
      [],
      'STATUS_IS_NOT_EXIST'
    ]
  ])('for state %p of store, the filterTodoTasks getter should return % when filter is %p ', (tasks, expected, filter) => {
    setActivePinia(createTestingPinia({
      initialState: {
        todoTasks: {
          tasks: tasks,
          filter: filter
        }
      },
      stubActions: false
    }))
    const todoStore = useTodoTasksStore()

    expect(todoStore.filterTodoTasks).toEqual(expected)
  })

  it('should generate id from nextId and add a new todo task when addTask is invoked ', () => {
    setActivePinia(createTestingPinia({
      stubActions: false
    }))
    const todoStore = useTodoTasksStore()

    todoStore.addTask('TEST DESCRIPTION')

    expect(todoStore.tasks).length(1)
    expect(todoStore.tasks).toEqual([{ id: 0, description: 'TEST DESCRIPTION', status: TodoTaskStatus.READY_TO_START }])
    expect(todoStore.nextId).toEqual(1)
  })

  it('should remove todo from state when remove is invoked', () => {
    setActivePinia(createTestingPinia({
      initialState: {
        todoTasks: {
          tasks: [
            {
              id: 0,
              status: TodoTaskStatus.COMPLETED
            }, {
              id: 1,
              status: TodoTaskStatus.READY_TO_START
            }]
        }
      },
      stubActions: false
    }))
    const todoStore = useTodoTasksStore()

    todoStore.removeTask({ id: 0, status: TodoTaskStatus.COMPLETED })

    expect(todoStore.tasks).length(1)
    expect(todoStore.tasks).toEqual([{ id: 1, status: TodoTaskStatus.READY_TO_START }])
  })
})
