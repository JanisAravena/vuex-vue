import { mount } from '@vue/test-utils';
import Communication from '@/views/Communication.vue';
import Parent from '@/components/Parent.vue';

describe('Communication.vue', () => {
  it('renderiza el componente Parent', () => {
    const wrapper = mount(Communication);
    expect(wrapper.findComponent(Parent).exists()).toBe(true);
  });
});