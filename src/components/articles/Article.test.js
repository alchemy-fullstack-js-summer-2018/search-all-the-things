import React from 'react';
import { shallow } from 'enzyme';
import Article from './Article';
import toJSON from 'enzyme-to-json';

const article = {
  'source': {
    'id': null,
    'name': 'premierguitar.com'
  },
  'author': 'Zachary Fjestad',
  'title': 'Trash or Treasure: Hiwatt DR103',
  'description': 'With their military-spec chassis, point-to-point wiring, and marine-grade cabinets, Hiwatt amps are known for being built like tanks.',
  'url': 'https://www.premierguitar.com/articles/19521-trash-or-treasure-hiwatt-dr103',
  'urlToImage': 'https://www.premierguitar.com/ext/resources/images/content/2103_08/Blogs/Oct13_PG_CLM_TrashorTreasure_Hiwatt-Custom-100-Front_630_WEB.png',
  'publishedAt': '2018-08-15T21:00:04Z'
};

describe('Article', () => {

  it('renders as designed', () => {
    const wrapper = shallow(<Article article={article}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
