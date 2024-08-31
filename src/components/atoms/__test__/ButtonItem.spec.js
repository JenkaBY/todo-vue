import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonItem from '@/components/atoms/ButtonItem.vue'

describe('ButtonItem', () => {
  it('should use props properly', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        name: 'Test Name',
        val: 'TEST',
        activeClasses: 'test-class'
      }
    })

    expect(wrapper.find('button').text()).toEqual('Test Name')
    expect(wrapper.find('button').classes()).toContain('test-class')
  })

  it('should emit "btnClicked" event with value taken from props.val', () => {
    const wrapper = mount(ButtonItem, {
      props: {
        name: 'Test Name',
        val: 'TEST',
        activeClasses: 'test-class'
      }
    })
    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().btnClicked).toBeTruthy()
    expect(wrapper.emitted().btnClicked[0]).toEqual(['TEST'])
  })
})
