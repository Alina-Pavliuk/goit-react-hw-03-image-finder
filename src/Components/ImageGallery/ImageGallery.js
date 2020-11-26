import styles from "./ImageGallery.module.css"
import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ cards, activePictures }) => {
  return (
    <ul className={styles.ImageGallery}>
      {cards.map(card => <ImageGalleryItem {...card} key={card.id} activePictures={activePictures} />)}
    </ul>
  );
}

ImageGallery.propTypes = {
  cards: PropTypes.array,
  activePictures: PropTypes.func
};

export default ImageGallery;