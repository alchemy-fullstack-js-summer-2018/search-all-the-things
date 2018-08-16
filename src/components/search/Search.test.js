import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from './Search';
import toJSON from 'enzyme-to-json';

describe('Search Component', () => {

  it('calls onSearch with query', () => {
    const sets = [{
      name: 'Khans of Tarkir',
      code: 'KTK'
    }];
    const handleSearch = jest.fn();
    const wrapper = mount(<Search onSearch={handleSearch} sets={sets}/>);

    const name = 'treasure cruise';

    wrapper.find('[name="name"]').simulate('change', {
      target: { name: 'name', value: name }
    });
    wrapper.find('button').simulate('submit');

    const calls = handleSearch.mock.calls;
    expect(calls.length).toBe(1);

    expect(calls[0][0].name).toBe(name);
  });

  it('renders as designed', () => {
    const wrapper = shallow(<Search onSearch={() => {}} sets={[]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});