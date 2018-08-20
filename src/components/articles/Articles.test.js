import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Articles from './Articles';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const articles = [{}, {}, {}];

describe('Articles test', () => {
    
  it('Articles renders as designed', () => {
    const wrapper = shallow(<Articles articles={articles}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});