import React from 'react';
import { shallow  } from 'enzyme';
import Articles from './Articles';
import toJSON from 'enzyme-to-json';

const articles = [{}, {}, {}];

describe('Articles test', () => {
    
  it('Articles renders as designed', () => {
    const wrapper = shallow(<Articles articles={articles}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});