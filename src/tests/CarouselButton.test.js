import React from 'react';
import { shallow } from 'enzyme';
import CarouselButton from '../CarouselButton';

describe('CarouselButton', () => {
  const text = 'Button text';
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButton buttonText={text}></CarouselButton>);
  });

  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('renders a button with text', () => {
    expect(wrapper.prop('buttonText')).toBe(text);
  });

  it('passes other props through to the <button>', () => {
    const onClick = () => {};
    const className = 'my-carousel-button';
    const dataAction = 'prev';
    wrapper.setProps({ onClick, className, 'data-action': dataAction });

    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper.prop('data-action')).toBe(dataAction);
  });
});
