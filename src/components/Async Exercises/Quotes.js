import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quotesArray = quotes.map(({ image, character, quote }) => {
    return (
      <li key={quote}>
        <Quote image={image} 
          character={character}
          quote={quote}/>
      </li>
    );
  });

  return (
    <ul>{quotesArray}</ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Quotes;
