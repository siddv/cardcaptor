import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';
import Card from '@/components/Card.vue';

describe('List.vue', () => {
  const name = 'potato';

  it('renders a name when passed one', () => {
    const wrapper = shallowMount(List, {
      propsData: { name },
    });
    expect(wrapper.text()).to.include(name);
  });

  it('renders the correct number of Cards', () => {
    const cards = [
      { name: 'potato' },
      { name: 'potatwo' },
    ];
    const wrapper = shallowMount(List, {
      propsData: { name, cards },
    });
    expect(wrapper.findAll(Card)).to.have.lengthOf(2);
  });
});
