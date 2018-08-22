import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Movies from './Movies';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const movies = [{}, {}, {}];

describe('Movies test', () => {
    
  it('Movies renders as designed', () => {
    const wrapper = shallow(<Movies movies={movies}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});