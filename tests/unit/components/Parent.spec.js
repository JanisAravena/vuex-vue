import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Parent.vue', () => {
  it('recibe el texto del componente Child', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent(Child);
    child.vm.$emit('sendText', 'Hola');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Hola');
  });
});