import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CarouselButton from '../CarouselButton';

describe('Carousel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('has a initial `slideIndex` of 0', () => {
    expect(wrapper.state('slideIndex')).toBe(0);
  });

  it('renders a CarouselButton named "Prev"', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(0)
        .prop('buttonText')
    ).toBe('Prev');
  });

  it('renders a CarouselButton named "Next"', () => {
    expect(
      wrapper
        .find(CarouselButton)
        .at(1)
        .prop('buttonText')
    ).toBe('Next');
  });
});
