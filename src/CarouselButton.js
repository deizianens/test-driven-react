import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = ({ children }) => <button>{children}</button>;

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired, //The node type means that children can be either a React element or a prim-itive, such as a string.
};
export default CarouselButton;
