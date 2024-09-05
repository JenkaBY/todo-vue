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

  it('should contain 3 filter buttons and only one active', () => {
    const wrapper = mount(TaskManagement, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.findAll('button.filter-item').length).toEqual(3)
    expect(wrapper.findAll('button.filter-item.active').length).toEqual(1)
  })

  it('should contain 1 remove completed buttons', () => {
    const wrapper = mount(TaskManagement, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.findAll('button.clear-completed-btn').length).toEqual(1)
  })

  it('active button should have specific classes', () => {
    const wrapper = mount(TaskManagement, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })

    expect(wrapper.find('button.filter-item.active').classes()).includes(
      'text-grey-400',
      'hover:text-grey-700'
    )
  })
})
