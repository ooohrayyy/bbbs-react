import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsHandbookCard from '../ReadingsHandbookCard/ReadingsHandbookCard';

import useScroll from '../../utils/useScroll';

import readingsHandbookCardsData from '../../assets/dev-data/ReadingsData/ReadingsHandbookData/readingsHandbookCardsData';

function ReadingsHandbook() {
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
    <section className="preview page__section">
      <div className="preview__title-wrap">
        <a href="./catalog.html" className="link">
          <h3 className="chapter-title chapter-title_clickable">Справочник</h3>
        </a>
        <ReadingsButtons
          onClickRight={scrollRight}
          onClickLeft={scrollLeft}
          containerPosition={containerPosition}
          containerScrollWidth={containerScrollWidth}
          containerOffsetWidth={containerOffsetWidth}
        />
      </div>
      <div className="preview__row" ref={containerRef} onScroll={handleScroll}>
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
