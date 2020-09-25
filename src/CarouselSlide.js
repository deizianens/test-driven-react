import React from 'react';
import PropTypes from 'prop-types';

const CarouselSlide = (props) => (
  <figure>
    <img src={props.imgUrl} />
    <figcaption>
      <strong>{props.description}</strong> {props.attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node.isRequired,
};

export default CarouselSlide;
