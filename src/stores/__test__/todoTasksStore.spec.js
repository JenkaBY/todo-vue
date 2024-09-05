import { describe, expect, it } from 'vitest'
import { useTodoTasksStore } from '@/stores/todoTasksStore.ts'
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
    [
      [
        { id: 0, isCompleted: true },
        { id: 1, isCompleted: false }
      ],
      [{ id: 0, isCompleted: true }],
      'COMPLETED'
    ],
    [
      [
        { id: 0, isCompleted: true },
        { id: 1, isCompleted: false }
      ],
      [{ id: 1, isCompleted: false }],
      'ACTIVE'
    ],
    [
      [
        { id: 0, isCompleted: true },
        { id: 1, isCompleted: false }
      ],
      [
        { id: 0, isCompleted: true },
        { id: 1, isCompleted: false }
      ],
      'ALL'
    ]
  ])(
    'for state %p of store, the filterTodoTasks getter should return % when filter is %p ',
    (tasks, expected, filter) => {
      setActivePinia(
        createTestingPinia({
          initialState: {
            todoTasks: {
              tasks: tasks,
              filter: filter
            }
          },
          stubActions: false
        })
      )
      const todoStore = useTodoTasksStore()

      expect(todoStore.filterTodoTasks).toEqual(expected)
    }
  )

  it('should generate id from nextId and add a new todo task when addTask is invoked ', () => {
    setActivePinia(
      createTestingPinia({
        stubActions: false
      })
    )
    const todoStore = useTodoTasksStore()

    todoStore.addTask('TEST DESCRIPTION')

    expect(todoStore.tasks).length(1)
    expect(todoStore.tasks).toEqual([
      { id: 0, description: 'TEST DESCRIPTION', isCompleted: false }
    ])
    expect(todoStore.nextId).toEqual(1)
  })

  it('should remove todo from state when remove is invoked', () => {
    setActivePinia(
      createTestingPinia({
        initialState: {
          todoTasks: {
            tasks: [
              {
                id: 0,
                isCompleted: true
              },
              {
                id: 1,
                isCompleted: false
              }
            ]
          }
        },
        stubActions: false
      })
    )
    const todoStore = useTodoTasksStore()

    todoStore.removeTask({ id: 0, isCompleted: true })

    expect(todoStore.tasks).length(1)
    expect(todoStore.tasks).toEqual([{ id: 1, isCompleted: false }])
  })

  it('should set new status for todo task', () => {
    setActivePinia(
      createTestingPinia({
        initialState: {
          todoTasks: {
            tasks: [
              {
                id: 0,
                isCompleted: true
              },
              {
                id: 1,
                isCompleted: false
              }
            ]
          }
        },
        stubActions: false
      })
    )
    const todoStore = useTodoTasksStore()

    todoStore.changeStatus({ id: 1, isCompleted: false }, true)

    expect(todoStore.tasks).length(2)
    expect(todoStore.tasks.filter((t) => t.id === 1)).toEqual([{ id: 1, isCompleted: true }])
  })

  it('itemsLeftCounter should return number active tasks', () => {
    setActivePinia(
      createTestingPinia({
        initialState: {
          todoTasks: {
            tasks: [
              {
                id: 0,
                isCompleted: true
              },
              {
                id: 1,
                isCompleted: false
              },
              {
                id: 3,
                isCompleted: false
              }
            ]
          }
        },
        stubActions: false
      })
    )
    const todoStore = useTodoTasksStore()

    expect(todoStore.itemsLeftCount).toEqual(2)
  })

  it('removeCompleted should all completed tasks', () => {
    setActivePinia(
      createTestingPinia({
        initialState: {
          todoTasks: {
            tasks: [
              {
                id: 0,
                isCompleted: true
              },
              {
                id: 1,
                isCompleted: false
              },
              {
                id: 3,
                isCompleted: true
              }
            ]
          }
        },
        stubActions: false
      })
    )
    const todoStore = useTodoTasksStore()
    todoStore.removeCompleted()

    expect(todoStore.tasks.length).toEqual(1)
    expect(todoStore.tasks).toContainEqual({
      id: 1,
      isCompleted: false
    })
  })
})
