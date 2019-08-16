import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('Quote component test', () => {
  it('renders Quote item', () => {
    let quote =  {
      character: 'Bender',
      quote: 'Bender is the greatest',
      image: 'bestBenderImage',
    };


    const wrapper = shallow(<Quote quoteObj={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
