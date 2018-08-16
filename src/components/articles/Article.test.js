import React from 'react';
import { shallow  } from 'enzyme';
import Article from './Article';
import toJSON from 'enzyme-to-json';

const article = {
  'source': {
    'id': null,
    'name': 'MotorTrend.com'
  },
  'author': 'Alisa Priddle ',
  'title': '2018 FORD MUSTANG COBRA JET FIRST LOOK: ONE FAST PONY',
  'description': 'Only 68 of the $130,000 race cars will be made',
  'url': 'https://www.motortrend.com/cars/ford/mustang/2018/2018-ford-mustang-cobra-jet-first-look-review/',
  'urlToImage': 'http://fordauthority.com/wp-content/uploads/2015/12/Ford-Mustang-Cobra-Jet-for-sale-720x340.jpg',
  'publishedAt': '2018-08-15T21:00:04Z'

};

describe('Article', () => {
    
  it('Renders as designed', () => {
    const wrapper = shallow(<Article article={article}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('Renders without image', () => {
    const noImageArticle = { ...article, urlToImage: null };
    const wrapper = shallow(<Article article={noImageArticle}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});