import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import toJSON from 'enzyme-to-json';

describe('Search', () => {

  it.skip('renders as intended', () => {
    const wrapper = shallow(<Search onSearch={() => {}}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});