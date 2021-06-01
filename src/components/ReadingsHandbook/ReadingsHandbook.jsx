import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsHandbookCard from '../ReadingsHandbookCard/ReadingsHandbookCard';

import useScroll from '../../utils/useScroll';

import readingsHandbookCardsData from '../../assets/dev-data/ReadingsData/ReadingsHandbookData/readingsHandbookCardsData';

function ReadingsHandbook() {
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
    <section className="preview page__section">
      <div className="preview__title-wrap">
        <a href="./catalog.html" className="link">
          <h3 className="chapter-title chapter-title_clickable">Справочник</h3>
        </a>
        <ReadingsButtons
          onClickRight={scrollRight}
          onClickLeft={scrollLeft}
          containerPosition={containerPosition}
          containerWidth={containerWidth}
        />
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
