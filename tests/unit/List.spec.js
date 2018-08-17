import Vue from 'vue';
import Vuex from 'vuex';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { shallowMount } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import List from '@/components/List.vue';
import Card from '@/components/Card.vue';

import storeConfig from '../store.config';

Vue.use(Vuex);
chai.use(spies);

describe('List.vue', () => {
  let name;
  let store;
  let commitSpy;

  beforeEach(() => {
    name = 'potato';
    store = new Vuex.Store(cloneDeep(storeConfig));
    commitSpy = chai.spy.on(store, 'commit', () => {});
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

  it('displays a new card form, when user hits "add new card"', () => {
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    expect(wrapper.findAll('.list__new-card-form').length).to.equal(0);
    wrapper.find('a.list__add-card').trigger('click');
    expect(wrapper.findAll('.list__new-card-form').length).to.equal(1);
  });

  it('asks to the store to a new card when user submits "new card" form', () => {
    const newCardName = 'potato';
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    wrapper.vm.newCardName = newCardName;
    wrapper.find('a.list__add-card').trigger('click');
    wrapper.find('form.list__new-card-form').trigger('submit');
    expect(commitSpy).to.have.been.called.with(
      'ADD_CARD',
      {
        name: newCardName,
        list: id,
      },
    );
  });

  it('asks the store to delete the list when use hits "delete list"', () => {
    const id = 1;
    const wrapper = shallowMount(List, {
      propsData: { name, id },
      store,
    });
    wrapper.find('a.list__delete').trigger('click');
    expect(commitSpy).to.have.been.called.with('DELETE_LIST', id);
  });
});
