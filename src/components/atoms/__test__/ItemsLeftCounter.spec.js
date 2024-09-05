import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ItemsLeftCounter from '@/components/atoms/ItemsLeftCounter.vue'

describe('ItemsLeftCounter', () => {
  it('should render left items in plural', () => {
    const wrapper = mount(ItemsLeftCounter, {
      props: {
        count: 5
      }
    })
    expect(wrapper.html()).toContain('5 items left')
  })

  it('should render left items in singular', () => {
    const wrapper = mount(ItemsLeftCounter, {
      props: {
        count: 1
      }
    })
    expect(wrapper.html()).toContain('1 item left')
  })
})
