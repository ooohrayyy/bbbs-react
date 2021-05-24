import React from 'react';

import ReadingsHandbook from '../ReadingsHandbook/ReadingsHandbook';
import ReadingsVideo from '../ReadingsVideo/ReadingsVideo';
import ReadingsArticles from '../ReadingsArticles/ReadingsArticles';
import ReadingsMovies from '../ReadingsMovies/ReadingsMovies';
import ReadingsBooks from '../ReadingsBooks/ReadingsBooks';

function Readings() {
  return (
    <>
      <ReadingsHandbook />
      <ReadingsVideo />
      <ReadingsArticles />
      <ReadingsMovies />
      <ReadingsBooks />
    </>
  );
}

export default Readings;
