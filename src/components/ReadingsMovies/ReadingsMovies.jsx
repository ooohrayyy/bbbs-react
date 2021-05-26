import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsMovieCard from '../ReadingsMovieCard/ReadingsMovieCard';

import readingsMoviesCardsData from '../../assets/dev-data/ReadingsData/ReadingsMoviesData/readingsMoviesCardsData';

function ReadingsMovies() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./films.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Фильмы</h3>
          </a>
          <ReadingsButtons />
        </div>
        <div className="preview__row">
          {readingsMoviesCardsData.map((item, index) => (
            <ReadingsMovieCard
              title={item.title}
              caption={item.caption}
              annotation={item.annotation}
              preview={item.preview}
              trailer={item.trailer}
              categories={item.categories}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ReadingsMovies;
