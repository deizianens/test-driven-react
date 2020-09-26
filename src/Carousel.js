import React from 'react';
import CarouselButton from './CarouselButton';

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <div>
        <CarouselButton buttonText='Prev' />
        <CarouselButton buttonText='Next' />
      </div>
    );
  }
}
export default Carousel;
