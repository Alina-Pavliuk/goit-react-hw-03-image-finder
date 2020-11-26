import styles from "./ImageGalleryItem.module.css"
import React from 'react';
import PropTypes from "prop-types"

const ImageGalleryItem = ({ webformatURL, largeImageURL, type, activePictures }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={activePictures}  >
      <img src={webformatURL} alt={type} className={styles.ImageGalleryItem_image} data-source={largeImageURL} />
    </li>);
};
ImageGalleryItem.propTypes = {
  activePictures: PropTypes.func,
  type: PropTypes.string,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
}
export default ImageGalleryItem;