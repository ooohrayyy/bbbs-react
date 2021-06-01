import React from 'react';
import { Link } from 'react-router-dom';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsVideoCard from './ReadingsVideoCard/ReadingsVideoCard';

import useScroll from '../../../utils/useScroll';

import readingsVideoCardsData from '../../../assets/dev-data/ReadingsData/ReadingsVideoData/readingsVideoCardsData';

function ReadingsVideo() {
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
          <Link to="/video" className="link">
            <h3 className="chapter-title chapter-title_clickable">Видео</h3>
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
          {readingsVideoCardsData.map((item, index) => (
            <ReadingsVideoCard
              cardTitle={item.cardTitle}
              cardCaption={item.cardCaption}
              cardPreview={item.cardPreview}
              cardDuration={item.cardDuration}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ReadingsVideo;
