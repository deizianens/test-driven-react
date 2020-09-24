import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselButton from '../CarouselButton';

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
  const text = 'Button text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
  });

  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('renders a button with children', () => {
    expect(wrapper.prop('children')).toBe(text);
  });
});
