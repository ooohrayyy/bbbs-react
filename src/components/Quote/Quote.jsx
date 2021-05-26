import React from 'react';

function Quote({ article }) {
  const cssRules = {
    background: article.color,
  };

  return (
    <article className="card card_content_quote" style={cssRules}>
      <a href="./articles.html" className="card__link-wrap">
        <h3 className="chapter-title card__quote">{article.title}</h3>
      </a>
      <a href="./articles.html" className="link card__link">
        читать статью
      </a>
    </article>
  );
}

export default Quote;
