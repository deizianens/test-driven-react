import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  handlePrevClick = () => {
    this.setState(({ slideIndex }) => ({ slideIndex: slideIndex - 1 }));
  };

  handleNextClick = () => {
    this.setState(({ slideIndex }) => ({ slideIndex: slideIndex + 1 }));
  };

  render() {
    const { slides, ...rest } = this.props;

    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton
          data-action='prev'
          onClick={this.handlePrevClick}
          buttonText='Prev'
        />
        <CarouselButton
          data-action='next'
          onClick={this.handleNextClick}
          buttonText='Next'
        />
      </div>
    );
  }
}
export default Carousel;
