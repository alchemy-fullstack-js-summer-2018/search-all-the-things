import React from 'react';
import { mount } from 'enzyme';
import BookDetails from './BookDetails';
//TODO: add in enzyme

describe('Books', () => {

  it('calls addFavorites when clicked', () => {
    const handleAdd = jest.fn();
    const wrapper = mount(<BookDetails onClick={handleAdd}/>);

    const book = {
      title: 'Lord of the Rings',
      authors: ['Tolkien']
    };

    wrapper.find('button').simulate('submit');

    const calls = handleAdd.mock.calls;
    console.log(calls);
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toBe(book);

  });
});