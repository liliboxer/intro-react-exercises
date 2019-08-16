import React from 'react';
import PropTypes from 'prop-types';

function Quote({ image, quote, character }) {
  return (
    <section>
      <img src={image}></img>
      <p>{quote}</p>
      <p>{character}</p>
    </section>
  );
}

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
