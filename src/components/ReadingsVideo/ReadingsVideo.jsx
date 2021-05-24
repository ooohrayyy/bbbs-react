import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsVideoCard from '../ReadingsVideoCard/ReadingsVideoCard';

import readingsVideoCardsData from '../../assets/dev-data/ReadingsData/ReadingsVideoData/readingsVideoCardsData';

function ReadingsVideo() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./video.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Видео</h3>
          </a>
          <ReadingsButtons />
        </div>
        <div className="preview__row">
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
