import React from 'react';

import ReadingsButtons from '../ReadingsButtons/ReadingsButtons';
import ReadingsArticleCard from '../ReadingsArticleCard/ReadingsArticleCard';

import readingsArticlesCardsData from '../../assets/dev-data/ReadingsData/ReadingsArticlesData/readingsArticlesCardsData';

function ReadingsArticles() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./articles.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">Статьи</h3>
          </a>
          <ReadingsButtons />
        </div>
        <div className="preview__row">
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
