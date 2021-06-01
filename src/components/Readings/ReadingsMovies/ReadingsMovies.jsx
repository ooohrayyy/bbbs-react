import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsMovieCard from './ReadingsMovieCard/ReadingsMovieCard';

import useScroll from '../../../utils/useScroll';

import readingsMoviesCardsData from '../../../assets/dev-data/ReadingsData/ReadingsMoviesData/readingsMoviesCardsData';

function ReadingsMovies() {
  const [containerPosition, setContainerPosition] = React.useState(0);
  const [containerOffsetWidth, setContainerOffsetWidth] = React.useState(0);
  const [containerScrollWidth, setContainerScrollWidth] = React.useState(0);

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

  function handleScroll(evt) {
    setContainerPosition(evt.target.scrollLeft);
  }

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerScrollWidth(containerRef.current.scrollWidth);
      setContainerOffsetWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./films.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Фильмы</h3>
          </a>
          <ReadingsButtons
            onClickRight={scrollRight}
            onClickLeft={scrollLeft}
            containerPosition={containerPosition}
            containerScrollWidth={containerScrollWidth}
            containerOffsetWidth={containerOffsetWidth}
          />
        </div>
        <div
          className="preview__row"
          ref={containerRef}
          onScroll={handleScroll}
        >
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
