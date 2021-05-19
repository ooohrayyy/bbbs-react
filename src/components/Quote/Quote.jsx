import React from 'react';

function Quote(props) {
  const { colorStyle, content } = props;
  const className = `card ${colorStyle} card_content_quote`;

  return (
    <article className={className}>
      <a href="./articles.html" className="card__link-wrap">
        <h3 className="chapter-title card__quote">{content}</h3>
      </a>
      <a href="./articles.html" className="link card__link">
        читать статью
      </a>
    </article>
  );
}

export default Quote;
