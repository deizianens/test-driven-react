import React from 'react';
import CarouselButton from './CarouselButton';

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
    return (
      <div>
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
