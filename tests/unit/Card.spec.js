import Vue from 'vue';
import Vuex from 'vuex';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { shallowMount } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import Card from '@/components/Card.vue';

import storeConfig from '../store.config';

Vue.use(Vuex);
chai.use(spies);

describe('Card.vue', () => {
  let name;
  let id;
  let store;
  let commitSpy;

  beforeEach(() => {
    name = 'potato';
    id = 1;
    store = new Vuex.Store(cloneDeep(storeConfig));
    commitSpy = chai.spy.on(store, 'commit', () => {});
  });

  it('renders a name when passed one', () => {
    const wrapper = shallowMount(Card, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.text()).to.include(name);
  });

  it('tells the store to delete itself, when a user hits "delete"', () => {
    const wrapper = shallowMount(Card, {
      propsData: { name, id },
      store,
    });
    wrapper.find('a').trigger('click');
    expect(commitSpy).to.have.been.called.with('DELETE_CARD', id);
  });

  // TODO: Fix this test
  // it('tells the store to move card to a new list', () => {
  //   const wrapper = shallowMount(Card, {
  //     propsData: { name, id },
  //     store,
  //   });
  //   wrapper.findAll('option').at(2).trigger('change');
  //   expect(commitSpy).to.have.been.called.with('MOVE_CARD', {
  //     listId: storeConfig.state.lists[2].id,
  //     cardId: id,
  //   });
  // });
});
