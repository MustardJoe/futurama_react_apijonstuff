import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');
  
  return (
    <>
      <h1>Hello World, go eat a b. of d.s...</h1>
      {quotes === 'top' && <TopQuotes />}
    </>
  );


}
