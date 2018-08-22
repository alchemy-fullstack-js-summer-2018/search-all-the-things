import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import toJSON from 'enzyme-to-json';

const article = {
  'source': {
    'id': null,
    'name': 'pdx.com'
  },
  'author': 'that guy',
  'title': 'some text',
  'description': 'some description',
  'url': 'www.pdx.com',
  'urlToImage': 'picture.jpg',
};

describe('Article', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<Article article={article}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders without image', () => {
    const noImageArticle = { ...article, urlToImage: null };
    const wrapper = shallow(<Article article={noImageArticle}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});