import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoInput from '@/components/atoms/TodoInput.vue'

describe('TodoInput', () => {
  it('should render placeholder and input value correctly', () => {
    const wrapper = mount(TodoInput, {
      props: {
        inputValue: 'Test input Value',
        placeHolder: 'There is a placeholder'
      }
    })
    expect(wrapper.props().inputValue).toContain('Test input Value')
    expect(wrapper.props().placeHolder).toContain('There is a placeholder')
  })

  it('should emit "enterKeyPressed" event', () => {
    const wrapper = mount(TodoInput)
    wrapper.find('input').trigger('keyup.enter')

    expect(wrapper.emitted().enterKeyPressed).toBeTruthy()
  })

  it('should emit "update:inputValue" event', () => {
    const wrapper = mount(TodoInput)
    wrapper.find('input').setValue('anyValue')

    expect(wrapper.emitted('update:inputValue')).toBeTruthy()
  })
})
