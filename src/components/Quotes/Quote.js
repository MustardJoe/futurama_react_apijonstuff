import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quoteObj }) {
  return (
    <section>
      <img src={quoteObj.image} />
      <p>{quoteObj.character}</p>
      <p>{quoteObj.quote}</p>
    </section>
  );
}

Quote.propTypes = {
  quoteObj: PropTypes.shape({
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired
};

export default Quote;
