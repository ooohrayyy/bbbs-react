import React from 'react';
import { Link } from 'react-router-dom';

function Quote({ article }) {
  const cssRules = {
    background: article.color,
  };

  return (
    <article className="card card_content_quote" style={cssRules}>
      <Link to="/articles" className="card__link-wrap">
        <h3 className="chapter-title card__quote">{article.title}</h3>
      </Link>
      <Link to="/articles" className="link card__link">
        читать статью
      </Link>
    </article>
  );
}

export default Quote;
