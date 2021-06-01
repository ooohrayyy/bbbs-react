import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsArticleCard from '../ReadingsArticleCard/ReadingsArticleCard';

import useScroll from '../../utils/useScroll';

import readingsArticlesCardsData from '../../assets/dev-data/ReadingsData/ReadingsArticlesData/readingsArticlesCardsData';

function ReadingsArticles() {
  const [containerPosition, setContainerPosition] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);

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

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./articles.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Статьи</h3>
          </a>
          <ReadingsButtons
            onClickRight={scrollRight}
            onClickLeft={scrollLeft}
            containerPosition={containerPosition}
            containerWidth={containerWidth}
          />
        </div>
        <div className="preview__row" ref={containerRef}>
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
