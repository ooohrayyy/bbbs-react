import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsBookCard from '../ReadingsBookCard/ReadingsBookCard';

import readingsBooksCardsData from '../../assets/dev-data/ReadingsData/ReadingsBooksData/readingsBooksCardsData';

function ReadingsBooks() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./books.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Книги</h3>
          </a>
          <ReadingsButtons />
        </div>
        <div className="preview__row">
          {readingsBooksCardsData.map((book, index) => (
            <ReadingsBookCard
              title={book.title}
              author={book.author}
              year={book.year}
              annotation={book.annotation}
              color={book.color}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ReadingsBooks;
