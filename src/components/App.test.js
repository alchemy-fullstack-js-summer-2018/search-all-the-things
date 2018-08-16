import React from 'react';
import { shallow  } from 'enzyme';
import App from './App';
import toJSON from 'enzyme-to-json';

describe('App testing', () => {
    
  it('App renders as designed', () => {
    const wrapper = shallow(<App/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});