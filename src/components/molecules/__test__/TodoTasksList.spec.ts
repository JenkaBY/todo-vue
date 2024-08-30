import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoTasksList from '@/components/molecules/TodoTasksList.vue'
import { TodoTaskStatus } from '@/stores/todoTasks.ts'
import { createTestingPinia } from '@pinia/testing'

describe('TodoTasksList', () => {

  it('initial state of task should be empty list', () => {
    const wrapper = mount(TodoTasksList, {
        global: {
          plugins: [
            createTestingPinia({
              initialState: {
                todoTasks: {
                  tasks: [
                    {
                      id: 0,
                      status: TodoTaskStatus.COMPLETED,
                      description: 'TASK 1'
                    }, {
                      id: 1,
                      status: TodoTaskStatus.READY_TO_START,
                      description: 'TASK 2'
                    }]
                }
              },
              stubActions: false
            })
          ]
        }
      }
    )

    expect(wrapper.findAll('.task-item')).length(2)
    expect(wrapper.html()).contains('TASK 2').contains('TASK 1')
  })
})
