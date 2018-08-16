import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import toJSON from 'enzyme-to-json';


describe('Search', () => {
    
  it('renders as designed', () => {
    const wrapper = shallow(<Search onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});