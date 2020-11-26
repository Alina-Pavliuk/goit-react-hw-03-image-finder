import styles from "./Button.module.css"
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ showMore }) => {
  return (
    <button type="button" className={styles.Button} onClick={showMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  showMore: PropTypes.func
};

export default Button;
