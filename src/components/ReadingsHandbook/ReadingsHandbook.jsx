import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsHandbookCard from '../ReadingsHandbookCard/ReadingsHandbookCard';

import readingsHandbookCardsData from '../../assets/dev-data/ReadingsData/ReadingsHandbookData/readingsHandbookCardsData';

function ReadingsHandbook() {
  const [containerPosition, setContainerPosition] = React.useState(0);

  const containerRef = React.useRef(null);

  function scrollRight() {
    containerRef.current.scroll(containerPosition + 300, 0);

    setContainerPosition(containerPosition + 300);
  }

  function scrollLeft() {
    containerRef.current.scroll(containerPosition - 300, 0);

    setContainerPosition(containerPosition - 300);
  }

  return (
    <section className="preview page__section">
      <div className="preview__title-wrap">
        <a href="./catalog.html" className="link">
          <h3 className="chapter-title chapter-title_clickable">Справочник</h3>
        </a>
        <ReadingsButtons onClickRight={scrollRight} onClickLeft={scrollLeft} />
      </div>
      <div className="preview__row" ref={containerRef}>
        {readingsHandbookCardsData.map((item, index) => (
          <ReadingsHandbookCard
            cardTitle={item.cardTitle}
            cardImage={item.cardImage}
            cardAlt={item.cardAlt}
            cardLink={item.cardLink}
            cardStyle={item.cardStyle}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default ReadingsHandbook;
