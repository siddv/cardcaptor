import Vue from 'vue';
import Vuex from 'vuex';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';
import Card from '@/components/Card.vue';

import storeConfig from '../store.config';

Vue.use(Vuex);

describe('List.vue', () => {
  let name;
  let store;

  beforeEach(() => {
    name = 'potato';
    store = new Vuex.Store(storeConfig);
  });

  it('renders a name when passed one', () => {
    const wrapper = shallowMount(List, {
      propsData: { name },
      store,
    });
    expect(wrapper.text()).to.include(name);
  });

  it('renders the correct number of Cards', () => {
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.findAll(Card)).to.have.lengthOf(2);
  });

  it('adds a new card when asked to', () => {
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.findAll(Card)).to.have.lengthOf(2);
    wrapper.vm.addCard();
    expect(wrapper.findAll(Card)).to.have.lengthOf(3);
  });

  it('deletes all children cards when asked to', () => {
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.findAll(Card)).to.have.lengthOf(3);
    wrapper.vm.deleteList();
    expect(wrapper.findAll(Card)).to.have.lengthOf(0);
  });
});
