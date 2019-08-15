import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photoURL }) {
  return (
    <>
      <img style={{ width: '200px', height: '200px' }} src={photoURL}></img>
    </>
  );
}

Photo.propTypes = {
  photoURL: PropTypes.string.isRequired
};

export default Photo;
