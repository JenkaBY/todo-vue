import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '@/components/molecules/TodoItem.vue'
import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import TodoInput from '@/components/atoms/TodoInput.vue'

describe('TodoItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoItem, {
        props: {
          item: { id: 99, description: 'Write unit tests', status: 'READY_TO_START' }
        }
      }
    )

  })

  it('should contain the TaskStatusIcon with the following props', () => {
    const iconComponent = wrapper.findComponent(TaskStatusIcon)

    expect(iconComponent.exists()).toBe(true)
    expect(iconComponent.props())
      .includes({ 'completed': false })
      .includes({ 'inactive': false })
  })

  it('should contain the TodoInput with the following props', () => {
    const todoInput = wrapper.findComponent(TodoInput)

    expect(todoInput.exists()).toBe(true)
    expect(todoInput.props()).includes({ 'inputValue': 'Write unit tests', 'isDisabled': true })
  })
})
