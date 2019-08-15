import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photoURL }) {
  return (
    <>
      <img src={photoURL}></img>
    </>
  );
}

Photo.propTypes = {
  photoURL: PropTypes.string.isRequired
};

export default Photo;
