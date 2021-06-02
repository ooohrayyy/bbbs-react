import React from 'react';
import { Link } from 'react-router-dom';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsArticleCard from './ReadingsArticleCard/ReadingsArticleCard';

import useScroll from '../../../utils/useScroll';

import readingsArticlesCardsData from '../../../assets/dev-data/ReadingsData/ReadingsArticlesData/readingsArticlesCardsData';

function ReadingsArticles() {
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
          <Link to="/articles" className="link">
            <h3 className="chapter-title chapter-title_clickable">Статьи</h3>
          </Link>
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
          {readingsArticlesCardsData.map((item, index) => (
            <ReadingsArticleCard
              cardTitle={item.cardTitle}
              cardCaption={item.cardCaption}
              cardText={item.cardText}
              cardLink={item.cardLink}
              cardColor={item.cardColor}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ReadingsArticles;
