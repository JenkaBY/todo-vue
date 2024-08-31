import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskManagement from '@/components/molecules/TaskManagement.vue'
import { createTestingPinia } from '@pinia/testing'
import ItemsLeftCounter from '@/components/atoms/ItemsLeftCounter.vue'

describe('TaskManagement', () => {
  it('should contain ItemsLeftCounter with count retrieved from store', () => {
    const wrapper = mount(TaskManagement, {
      global: {
        plugins: [
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
                    id: 2,
                    isCompleted: false
                  }
                ]
              }
            },
            stubActions: false
          })
        ]
      }
    })

    const itemLeftCounterComponent = wrapper.findComponent(ItemsLeftCounter)
    expect(itemLeftCounterComponent.exists()).toEqual(true)
    expect(itemLeftCounterComponent.props()).toEqual({
      count: 2
    })
  })
})
