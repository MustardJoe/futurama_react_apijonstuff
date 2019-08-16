import React from 'react';
import Quote from './Quote';
import PropTypes from 'prop-types';
import styles from './Quotes.css';

function Quotes({ quotes }) {
  const quoteList = quotes.map((quoteObj, i) => (
    <li className='quoteListItem' key={i}>
      <Quote quoteObj={quoteObj} />
    </li>
  ));

  return (
    <ul className={styles.Quotes}>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;

