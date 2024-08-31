import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '@/components/molecules/TodoItem.vue'
import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import TodoInput from '@/components/atoms/TodoInput.vue'
import { createTestingPinia } from '@pinia/testing'
import { useTodoTasksStore } from '@/stores/todoTasksStore'

describe('TodoItem', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(TodoItem, {
      props: {
        id: 99,
        description: 'Write unit tests',
        isCompleted: false
      },
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })
  })

  it('should contain the TaskStatusIcon with the following props', () => {
    const iconComponent = wrapper.findComponent(TaskStatusIcon)

    expect(iconComponent.exists()).toBe(true)
    expect(iconComponent.props()).includes({ completed: false }).includes({ inactive: false })
  })

  it('should invoke tasksStore when icon component emit event', async () => {
    const iconComponent = wrapper.findComponent(TaskStatusIcon)
    await iconComponent.vm.$emit('icon-clicked')

    const store = useTodoTasksStore()
    expect(store.changeStatus).toHaveBeenCalledTimes(1)
    expect(store.changeStatus).toHaveBeenCalledWith(
      {
        id: 99,
        description: 'Write unit tests',
        isCompleted: false
      },
      true
    )
  })

  it('should contain the TodoInput with the following props', () => {
    const todoInput = wrapper.findComponent(TodoInput)

    expect(todoInput.exists()).toBe(true)
    expect(todoInput.props()).includes({ inputValue: 'Write unit tests', isDisabled: true })
  })

  it('should contain TodoInput and its class should contain "line-through"', () => {
    wrapper = mount(TodoItem, {
      props: {
        id: 99,
        description: 'Write unit tests',
        isCompleted: true
      },
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false
          })
        ]
      }
    })
    const todoInput = wrapper.findComponent(TodoInput)

    expect(todoInput.classes('none')).toBe(false)
    expect(todoInput.classes('line-through')).toBe(true)
  })

  it('should contain TodoInput and its class should contain "none"', () => {
    const todoInput = wrapper.findComponent(TodoInput)

    expect(todoInput.classes('none')).toBe(true)
    expect(todoInput.classes('line-through')).toBe(false)
  })
})
