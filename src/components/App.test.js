import * as React from 'react';
import { shallow, configure  } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('App testing', () => {
    
  it('App renders as designed', () => {
    const wrapper = shallow(<App/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});