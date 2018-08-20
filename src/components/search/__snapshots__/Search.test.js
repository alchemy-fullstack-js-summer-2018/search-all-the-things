import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Search from './Search';

describe('Search', () => {

  it('calls onSearch with criteria entered', () => {
    const handleSearch = jest.fn();
    const wrapper = mount(<Search onSearch={handleSearch}/>);

    const search = 'Lord of the Rings';

    //input and click
    wrapper.find('input').simulate('change', {
      target: { value: search }
    });

    wrapper.find('button').simulate('submit');

    //test we got the search term
    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1); //only called once
    expect(calls[0][0].search).toBe(search);
  });

  it('renders as designed', () => {
    const wrapper = shallow(<Search onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});