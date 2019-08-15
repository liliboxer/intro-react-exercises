import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photoList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photoURL={photo}/>
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Photos;
