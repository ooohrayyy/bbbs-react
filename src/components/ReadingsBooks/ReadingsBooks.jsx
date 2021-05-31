import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsBookCard from '../ReadingsBookCard/ReadingsBookCard';

import useScroll from '../../utils/useScroll';

import readingsBooksCardsData from '../../assets/dev-data/ReadingsData/ReadingsBooksData/readingsBooksCardsData';

function ReadingsBooks() {
  const [containerPosition, setContainerPosition] = React.useState(0);

  const containerRef = React.useRef(null);

  const scrollRight = useScroll(
    containerRef,
    containerPosition,
    setContainerPosition,
    'right',
  );

  const scrollLeft = useScroll(
    containerRef,
    containerPosition,
    setContainerPosition,
    'left',
  );

  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./books.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Книги</h3>
          </a>
          <ReadingsButtons
            onClickRight={scrollRight}
            onClickLeft={scrollLeft}
          />
        </div>
        <div className="preview__row" ref={containerRef}>
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
