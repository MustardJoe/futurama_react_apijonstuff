import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes component test', () => {
  it('renders Quotes components, which is list of Quote comps', () => {
    const quotes = [{
      character: 'Fry',
      quote: 'What??',
      image: '/image'
    },
    {
      character: 'Fry',
      quote: 'Huh??',
      image: '/image'
    }];

    const wrapper = shallow(<Quotes quotes={quotes}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
