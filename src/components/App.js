import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes';
import CharQuotes from '../containers/quotes/CharQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');
  
  return (
    <>
      <h1>Hello World, go eat a b. of bees...</h1>
      <button onClick={() => updateQuotes('top')}>Top Quotes</button>
      <button onClick={() => updateQuotes('character')}>Character Quotes</button>
      {quotes === 'top' && <TopQuotes />}
      {quotes === 'character' && <CharQuotes />}
    </>
  );


}
