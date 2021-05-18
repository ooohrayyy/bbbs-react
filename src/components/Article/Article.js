import React from 'react';

function Article() {
  return (
    <article className="card card_color_green card_content_quote">
      <a href="./articles.html" className="card__link-wrap">
        <h3 className="chapter-title card__quote">
          У таких детей возникает ощущение отверженности. Оно приводит к
          напряженности и недоверию к людям и, как итог, к реальному неприятию
          себя и окружающих.
        </h3>
      </a>
      <a href="./articles.html" className="link card__link">
        читать статью
      </a>
    </article>
  );
}

export default Article;
