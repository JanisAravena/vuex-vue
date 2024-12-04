import { mount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
  it('emite el evento "sendText" con el texto ingresado', async () => {
    const wrapper = mount(Child);
    const input = wrapper.find('input');
    await input.setValue('Hola');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted().sendText[0]).toEqual(['Hola']);
  });
});