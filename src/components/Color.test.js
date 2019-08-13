import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
