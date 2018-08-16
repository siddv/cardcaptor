import Vue from 'vue';
import Vuex from 'vuex';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

import storeConfig from '../store.config';

Vue.use(Vuex);

describe('Card.vue', () => {
  let name;
  let id;
  let store;

  beforeEach(() => {
    name = 'potato';
    id = 1;
    store = new Vuex.Store(storeConfig);
  });

  it('renders a name when passed one', () => {
    const wrapper = shallowMount(Card, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.text()).to.include(name);
  });
});
