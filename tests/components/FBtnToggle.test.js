import { mount } from '@vue/test-utils'
import Component from '@freshinup/core-ui/src/components/FBtnGroup.vue'

describe('FBtnGroup', () => {
  it('snapshot default', async () => {
    const wrapper = mount(Component)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('snapshot with color', async () => {
    const wrapper = mount(Component, {
      propsData: {
        color: 'primary'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
