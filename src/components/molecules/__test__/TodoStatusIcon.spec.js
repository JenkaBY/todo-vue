import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TaskStatusIcon from '@/components/molecules/TaskStatusIcon.vue'
import CheckIcon from '@/components/atoms/icons/CheckIcon.vue'
import CircleIcon from '@/components/atoms/icons/CircleIcon.vue'

describe('TodoStatusIcon', () => {
  it('should have cursor-pointer class when inactive false', () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        inactive: false
      }
    })

    expect(wrapper.find('div.cursor-pointer').exists()).toBe(true)
  })

  it('should have no cursor-pointer class when inactive true', () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        inactive: true
      }
    })

    expect(wrapper.find('div.cursor-pointer').exists()).toBe(false)
  })

  it('should emit iconClicked event when props.inactive=false', async () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        inactive: false
      }
    })

    await wrapper.find('div.cursor-pointer').trigger('click')

    expect(wrapper.emitted('iconClicked')).toBeTruthy
  })

  it('should render CheckIcon if props.completed=true', () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        completed: true
      }
    })

    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true)
    expect(wrapper.findComponent(CircleIcon).exists()).toBe(false)
  })

  it('should render CircleIcon if props.completed=false', () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        completed: false
      }
    })

    expect(wrapper.findComponent(CheckIcon).exists()).toBe(false)
    expect(wrapper.findComponent(CircleIcon).exists()).toBe(true)
  })

  it('should render CircleIcon with hover class', () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        completed: false,
        inactive: false
      }
    })

    const circleIcon = wrapper.findComponent(CircleIcon)
    expect(circleIcon.classes('hover:stroke-neutral-800')).toBeTruthy()
  })

  it('should render CheckIcon if props.completed=true and then change component after props was changed', async () => {
    const wrapper = mount(TaskStatusIcon, {
      props: {
        completed: true
      }
    })

    expect(wrapper.findComponent(CheckIcon).exists()).toBe(true)
    expect(wrapper.findComponent(CircleIcon).exists()).toBe(false)

    await wrapper.setProps({
      completed: false
    })

    expect(wrapper.findComponent(CheckIcon).exists()).toBe(false)
    expect(wrapper.findComponent(CircleIcon).exists()).toBe(true)
  })
})
