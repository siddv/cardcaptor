import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  it('renders a name when passed one', () => {
    const name = 'potato';
    const wrapper = shallowMount(Card, {
      propsData: { name },
    });
    expect(wrapper.text()).to.include(name);
  });
});
