import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';


function PhotoAlbum({ title, photos }) {
  return (
    <>
      <h1>{title}</h1>
      <ul><Photos photos={photos}/></ul>
    </>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PhotoAlbum;
