import { beforeAll, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoInputTask from '@/components/molecules/TodoInputTask.vue'
import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'

describe('TodoInputTask', () => {
  beforeAll(() => {
    setActivePinia(createTestingPinia())
  })

  it('should render circle and input elements', () => {
    const wrapper = mount(TodoInputTask, {
      props: {
        isTaskCompleted: false
      }
    })

    expect(wrapper.find('circle').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('should render error message when input is empty', async () => {
    const wrapper = mount(TodoInputTask, {
      props: {
        isTaskCompleted: false
      }
    })
    await wrapper.find('input').setValue('   ')
    await wrapper.find('input').trigger('keyup.enter')

    const inputError = wrapper.find('.validation-message')
    expect(inputError.exists()).toBe(true)
    expect(inputError.text()).toEqual('Value is required')

    expect(wrapper.find('.input-wrapper').classes()).containSubset(['border-pink-500', 'border'])
  })

  it('should render error message when input is more than 150 characters', async () => {
    const wrapper = mount(TodoInputTask, {
      props: {
        isTaskCompleted: false
      }
    })
    const inputTodo = wrapper.find('input')
    await inputTodo.setValue(new Array(152).join('a'))
    await inputTodo.trigger('keyup.enter')

    const inputError = wrapper.find('.validation-message')
    expect(inputError.exists()).toBe(true)
    expect(inputError.text()).toEqual('The maximum length allowed is 150')

    expect(wrapper.find('.input-wrapper').classes()).containSubset(['border-pink-500', 'border'])
  })
})
