import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import './TextButton.css';

/**
 * A customizable Text Button with different types
 */
const TextButton = ({ action, align, ...props }) => {
  return (
    <div className={'btn-container ' + align}>
      <Button
        onClick={action}
        {...props}
      >
        {props.children}
      </Button>
    </div>
    
  )
}
export default TextButton

TextButton.defaultProps = {
  variant: "primary",
  align: "left"
};

TextButton.propTypes = {
  /**
   * Define the onClick function
   */
  action: PropTypes.func,
  /**
   * Choose a Button type to define the colors
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "delete",
    "confirm",
    "info"
  ]),
  /**
   * Define where the Button should be positioned
   */
  align: PropTypes.oneOf([
    "left",
    "center",
    "right"
  ])
};