import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoTasksList from '@/components/molecules/TodoTasksList.vue'
import { createTestingPinia } from '@pinia/testing'

describe('TodoTasksList', () => {
  it('should render all tasks storing in store', () => {
    const wrapper = mount(TodoTasksList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todoTasks: {
                tasks: [
                  {
                    id: 0,
                    isCompleted: true,
                    description: 'TASK 1'
                  },
                  {
                    id: 1,
                    isCompleted: false,
                    description: 'TASK 2'
                  }
                ]
              }
            },
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.findAll('.task-item')).length(2)
    expect(wrapper.html()).contains('TASK 2').contains('TASK 1')
  })

  it('initial state of task should be empty list', () => {
    const wrapper = mount(TodoTasksList, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.findAll('.task-item')).length(0)
  })

  it('should render tasks according to filter specified in taskStore.filter', () => {
    const wrapper = mount(TodoTasksList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todoTasks: {
                filter: 'COMPLETED',
                tasks: [
                  {
                    id: 0,
                    isCompleted: true,
                    description: 'TASK 1'
                  },
                  {
                    id: 1,
                    isCompleted: false,
                    description: 'TASK 2'
                  }
                ]
              }
            },
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.findAll('.task-item')).length(1)
    expect(wrapper.html()).contains('TASK 1')
  })
})
