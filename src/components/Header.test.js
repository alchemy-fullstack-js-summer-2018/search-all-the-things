import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import toJSON from 'enzyme-to-json';

describe('Header', () => {

  it('renders as designed', () => {
    // shallow render is "visualization of what got render"
    const wrapper = shallow(<Header onSearch={() => {}}/>);
    // make sure it is still doing the same thing
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});