import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';
import toJSON from 'enzyme-to-json';

describe('Search', () => {

  it('call onSearch properly', () => {
    const handleSearch = jest.fn();
    const wrapper = mount(<Search onSearch={handleSearch}/>);

    const search = 'Nintendo';

    wrapper.find('input').simulate('change', {
      target: { value: search }
    });
    wrapper.find('button').simulate('submit');

    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0].search).toBe(search);
  });
});