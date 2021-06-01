import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsVideoCard from '../ReadingsVideoCard/ReadingsVideoCard';

import useScroll from '../../utils/useScroll';

import readingsVideoCardsData from '../../assets/dev-data/ReadingsData/ReadingsVideoData/readingsVideoCardsData';

function ReadingsVideo() {
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

  function handleScroll(evt) {
    setContainerPosition(evt.target.scrollLeft);
  }

  React.useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./video.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Видео</h3>
          </a>
          <ReadingsButtons
            onClickRight={scrollRight}
            onClickLeft={scrollLeft}
            containerPosition={containerPosition}
            containerWidth={containerWidth}
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
